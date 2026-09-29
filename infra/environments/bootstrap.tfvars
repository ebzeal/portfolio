# ==== Bootstrap stage (run: `terraform -chdir=infra/bootstrap init && ... apply -var-file=../environments/bootstrap.tfvars`) ====

region              = "ca-central-1"
project_name        = "ebzeal"
ecr_repository_name = "ebzeal-digital-twin"
state_bucket_name   = "ebzeal-terraform-state"

# GitHub Actions OIDC: lets the CI/CD workflow assume a deployment role
# without long-lived AWS credentials.
enable_github_oidc = true
github_org         = "ebzeal"
github_repo        = "portfolio"

tags = {
  Environment = "bootstrap"
  Project     = "ebzeal"
  ManagedBy   = "terraform"
}
