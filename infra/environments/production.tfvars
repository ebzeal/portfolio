# ==== Application stage (run: `terraform -chdir=infra/application init && ... apply -var-file=../environments/production.tfvars`) ====

region              = "ca-central-1"
project_name        = "ebzeal"
ecr_repository_name = "ebzeal-digital-twin"

# Must match an image tag already pushed to ECR.
image_tag = "latest"

# Lambda
lambda_memory_size          = 1024
lambda_timeout              = 30
lambda_reserved_concurrency = -1
log_retention_days          = 30
use_s3                      = true

# Chat memory retention (days)
chat_memory_expiration_days = 365

# Custom domain (leave both empty to serve from the CloudFront hostname).
domain_name    = ""
hosted_zone_id = ""

# CloudFront
cloudfront_price_class = "PriceClass_100"

# Notifications + budget
alert_email              = ""
enable_budget            = false
budget_amount            = "100"
budget_time_period_start = "2026-01-01_00:00"

# Secret: do NOT commit the real value. Provide via
#   TF_VAR_deepseek_api_key=... or a gitignored secrets.auto.tfvars.
# deepseek_api_key = ""

tags = {
  Environment = "production"
  Project     = "ebzeal"
  ManagedBy   = "terraform"
}
