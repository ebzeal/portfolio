# ---------------------------------------------------------------------------
# Cost budget (optional). Set enable_budget = true and alert_email.
# ---------------------------------------------------------------------------

resource "aws_budgets_budget" "monthly" {
  count = var.enable_budget ? 1 : 0

  name              = "${var.project_name}-monthly-cost-budget"
  budget_type       = "COST"
  limit_amount      = var.budget_amount
  limit_unit        = "USD"
  time_period_start = var.budget_time_period_start
  time_unit         = "MONTHLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 80
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = var.alert_email != "" ? [var.alert_email] : []
  }
}
