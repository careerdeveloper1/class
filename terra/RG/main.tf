variable "varrg" {}
variable "prefix" {}

resource "azurerm_resource_group" "rg_block" {
    for_each = var.varrg
    name = "${var.prefix}${each.value.rg-name}"
    location = each.value.location
}
