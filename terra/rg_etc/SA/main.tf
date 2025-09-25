variable "varsa" {}
variable "prefix" {}
# variable "varrg" {}

resource "azurerm_storage_account" "sa_block" {
    for_each = var.varsa
    name= each.value.sa-name
    resource_group_name = "${var.prefix}${each.value.rg-name}"
    location = each.value.location
    account_tier= "Standard"
    account_replication_type = "GRS"
    tags = {
    environment = "staticwebapp"
  }
}
