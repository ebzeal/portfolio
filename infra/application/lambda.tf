# ---------------------------------------------------------------------------
# Lambda (container image) + CloudWatch logs + alarms.
# ---------------------------------------------------------------------------

resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${var.project_name}-digital-twin"
  retention_in_days = var.log_retention_days
  tags              = var.tags
}

# NOTE: the image referenced by `image_tag` must already be pushed to ECR before
# this resource can be created/updated. This is the ordering the bootstrap stage
# exists to enable: ECR (bootstrap) -> push image (CI) -> Lambda (application).
resource "aws_lambda_function" "app" {
  function_name = "${var.project_name}-digital-twin"
  role          = aws_iam_role.lambda.arn
  package_type  = "Image"
  image_uri     = "${local.ecr_repository_url}:${var.image_tag}"
  architectures = ["x86_64"]
  memory_size   = var.lambda_memory_size
  timeout       = var.lambda_timeout

  reserved_concurrent_executions = var.lambda_reserved_concurrency > 0 ? var.lambda_reserved_concurrency : null

  environment {
    variables = {
      DEEPSEEK_API_KEY = var.deepseek_api_key
      USE_S3           = tostring(var.use_s3)
      S3_BUCKET        = local.memory_bucket_name
      CORS_ORIGINS     = join(",", local.cors_origins)
    }
  }

  depends_on = [aws_cloudwatch_log_group.lambda]

  tags = var.tags
}

# ---------------------------------------------------------------------------
# Alarm SNS topic + email subscription (optional).
# ---------------------------------------------------------------------------

resource "aws_sns_topic" "alarms" {
  count = var.alert_email != "" ? 1 : 0
  name  = "${var.project_name}-alarms"
  tags  = var.tags
}

resource "aws_sns_topic_subscription" "alarms_email" {
  count     = var.alert_email != "" ? 1 : 0
  topic_arn = aws_sns_topic.alarms[0].arn
  protocol  = "email"
  endpoint  = var.alert_email
}

# ---------------------------------------------------------------------------
# Lambda error alarm.
# ---------------------------------------------------------------------------

resource "aws_cloudwatch_metric_alarm" "lambda_errors" {
  alarm_name          = "${var.project_name}-digital-twin-lambda-errors"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = 300
  statistic           = "Sum"
  threshold           = 1
  alarm_description   = "Digital-twin Lambda emitted errors"
  alarm_actions       = var.alert_email != "" ? [aws_sns_topic.alarms[0].arn] : []

  dimensions = {
    FunctionName = aws_lambda_function.app.function_name
  }

  tags = var.tags
}
