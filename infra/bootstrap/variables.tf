variable "region" {
  description = "AWS region for all bootstrap resources"
  type        = string
  default     = "ca-central-1"
}

variable "project_name" {
  description = "Project name used to prefix resource names"
  type        = string
  default     = "ebzeal_portfolio"
}

variable "ecr_repository_name" {
  description = "Name of the ECR repository that holds the Lambda container image"
  type        = string
  default     = "ebzeal-digital-twin"
}

variable "state_bucket_name" {
  description = "Globally unique S3 bucket name for Terraform state"
  type        = string
  default     = "ebzeal-terraform-state"
}

variable "enable_github_oidc" {
  description = "Create a GitHub Actions OIDC provider and deployment role"
  type        = bool
  default     = false
}

variable "github_org" {
  description = "GitHub organization or user name for the OIDC trust policy"
  type        = string
  default     = ""
}

variable "github_repo" {
  description = "GitHub repository name for the OIDC trust policy"
  type        = string
  default     = ""
}

variable "tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
