output "api_endpoint" {
  description = "API Gateway HTTP API invoke URL"
  value       = aws_apigatewayv2_api.main.api_endpoint
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution hostname"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for invalidations)"
  value       = aws_cloudfront_distribution.main.id
}

output "lambda_function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.app.function_name
}

output "lambda_function_arn" {
  description = "Lambda function ARN"
  value       = aws_lambda_function.app.arn
}

output "frontend_bucket_name" {
  description = "Frontend S3 bucket name"
  value       = aws_s3_bucket.frontend.id
}

output "memory_bucket_name" {
  description = "Chat-memory S3 bucket name"
  value       = aws_s3_bucket.memory.id
}

output "site_url" {
  description = "Final website URL"
  value       = var.domain_name != "" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.main.domain_name}"
}
