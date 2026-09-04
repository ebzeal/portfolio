# ---------------------------------------------------------------------------
# S3 buckets: private frontend + chat memory.
# ---------------------------------------------------------------------------

resource "aws_s3_bucket" "frontend" {
  bucket = local.frontend_bucket_name
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket                  = aws_s3_bucket.frontend.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "frontend" {
  bucket = aws_s3_bucket.frontend.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket" "memory" {
  bucket = local.memory_bucket_name
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "memory" {
  bucket                  = aws_s3_bucket.memory.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "memory" {
  bucket = aws_s3_bucket.memory.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Expire chat-memory objects after the configured retention window.
resource "aws_s3_bucket_lifecycle_configuration" "memory" {
  bucket = aws_s3_bucket.memory.id

  rule {
    id     = "expire-chat-memory"
    status = "Enabled"

    filter {}

    expiration {
      days = var.chat_memory_expiration_days
    }
  }
}
