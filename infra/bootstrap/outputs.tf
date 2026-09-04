output "ecr_repository_name" {
  description = "ECR repository name (used by the application stage as a data source)"
  value       = aws_ecr_repository.app.name
}

output "ecr_repository_url" {
  description = "ECR repository URL used to tag/push the Lambda image"
  value       = aws_ecr_repository.app.repository_url
}

output "ecr_repository_arn" {
  description = "ARN of the ECR repository"
  value       = aws_ecr_repository.app.arn
}

output "state_bucket_name" {
  description = "S3 bucket name hosting Terraform state"
  value       = aws_s3_bucket.state.id
}

output "state_bucket_arn" {
  description = "ARN of the Terraform state bucket"
  value       = aws_s3_bucket.state.arn
}

output "lock_table_name" {
  description = "DynamoDB table name used for state locking"
  value       = aws_dynamodb_table.lock.name
}

output "github_deploy_role_arn" {
  description = "ARN of the GitHub Actions deployment role (empty if disabled)"
  value       = var.enable_github_oidc ? aws_iam_role.github_deploy[0].arn : ""
}
