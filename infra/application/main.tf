terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    # These values MUST match the bootstrap stage outputs (bootstrap defaults).
    # Override with `terraform init -backend-config=...` if you customized them.
    bucket       = "ebzeal-terraform-state"
    key          = "application/production/terraform.tfstate"
    region       = "ca-central-1"
    encrypt      = true
    use_lockfile = true
  }
}

provider "aws" {
  region = var.region
}

# CloudFront requires ACM certificates to live in us-east-1.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

data "aws_caller_identity" "current" {}

# Cross-stage dependency: the ECR repository created by the bootstrap stage.
data "aws_ecr_repository" "app" {
  name = var.ecr_repository_name
}

locals {
  account_id = data.aws_caller_identity.current.account_id

  frontend_bucket_name = var.frontend_bucket_name != "" ? var.frontend_bucket_name : "${var.project_name}-website-${local.account_id}"
  memory_bucket_name   = var.memory_bucket_name != "" ? var.memory_bucket_name : "${var.project_name}-chat-memory-${local.account_id}"

  ecr_repository_url = data.aws_ecr_repository.app.repository_url

  # CORS origin: the custom domain when set, otherwise the CloudFront hostname.
  site_hostname = var.domain_name != "" ? var.domain_name : aws_cloudfront_distribution.main.domain_name
  cors_origins  = length(var.cors_origins) > 0 ? var.cors_origins : ["https://${local.site_hostname}"]
}
