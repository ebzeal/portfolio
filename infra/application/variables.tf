variable "region" {
  description = "AWS region for all application resources"
  type        = string
  default     = "ca-central-1"
}

variable "project_name" {
  description = "Project name used to prefix resource names"
  type        = string
  default     = "ebzeal"
}

variable "ecr_repository_name" {
  description = "ECR repository name (created by the bootstrap stage)"
  type        = string
  default     = "ebzeal-digital-twin"
}

variable "image_tag" {
  description = "Docker image tag to deploy to Lambda (must already exist in ECR)"
  type        = string
  default     = "latest"
}

variable "lambda_memory_size" {
  description = "Lambda memory in MB"
  type        = number
  default     = 1024
}

variable "lambda_timeout" {
  description = "Lambda timeout in seconds"
  type        = number
  default     = 30
}

variable "lambda_reserved_concurrency" {
  description = "Reserved concurrency for the Lambda (<= 0 disables the limit)"
  type        = number
  default     = -1
}

variable "log_retention_days" {
  description = "CloudWatch log group retention in days"
  type        = number
  default     = 30
}

variable "deepseek_api_key" {
  description = "DeepSeek API key. Prefer Secrets Manager in production."
  type        = string
  sensitive   = true
  default     = ""
}

variable "use_s3" {
  description = "Store chat memory in S3 instead of local disk"
  type        = bool
  default     = true
}

variable "cors_origins" {
  description = "Explicit CORS origins (defaults to the CloudFront/custom domain)"
  type        = list(string)
  default     = []
}

variable "frontend_bucket_name" {
  description = "Frontend S3 bucket name (defaults to <project>-website-<account>)"
  type        = string
  default     = ""
}

variable "memory_bucket_name" {
  description = "Chat-memory S3 bucket name (defaults to <project>-chat-memory-<account>)"
  type        = string
  default     = ""
}

variable "chat_memory_expiration_days" {
  description = "Number of days before chat-memory objects expire"
  type        = number
  default     = 365
}

variable "cloudfront_price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}

variable "domain_name" {
  description = "Custom domain (e.g. www.ebzeal.com). Leave empty to use the CloudFront hostname."
  type        = string
  default     = ""
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID (required when domain_name is set)"
  type        = string
  default     = ""
}

variable "alert_email" {
  description = "Email address for alarm and budget notifications"
  type        = string
  default     = ""
}

variable "enable_budget" {
  description = "Create an AWS monthly cost budget"
  type        = bool
  default     = false
}

variable "budget_amount" {
  description = "Monthly budget limit in USD"
  type        = string
  default     = "100"
}

variable "budget_time_period_start" {
  description = "Budget start date (first day of a recent month), format YYYY-MM-DD_HH:MM"
  type        = string
  default     = "2026-01-01_00:00"
}

variable "tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
