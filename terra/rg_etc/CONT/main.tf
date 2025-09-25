variable "varcont" {}
variable "varsa-data" {}
variable "prefix" {}

data "azurerm_storage_account" "sa-data-block" {
    for_each = var.varsa-data
    name= each.value.sa-name
    resource_group_name = "${var.prefix}${each.value.rg-name}"    
}

resource "azurerm_storage_container" "cont-block" {
    for_each = var.varcont
    name = "${var.prefix}${each.value.cont-name}"
    storage_account_id =data.azurerm_storage_account.sa-data-block[each.value.sa].id
    container_access_type = each.value.container_access_type
}