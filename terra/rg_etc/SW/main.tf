variable "varsa-data" {}
variable "prefix" {}
variable "varsw" {}


data "azurerm_storage_account" "sa-data-block" {
    for_each = var.varsa-data
    name= each.value.sa-name
    resource_group_name = "${var.prefix}${each.value.rg-name}"    
}


resource "azurerm_storage_account_static_website" "sw-block" {
    for_each = var.varsw
storage_account_id =data.azurerm_storage_account.sa-data-block[each.value.sw].id
  error_404_document = "custom_not_found.html"
  index_document     = "custom_index.html"
}

# output "static_website_url" {
#   value = {
#     for key, site in azurerm_storage_account_static_website.sw_block :
#     key => site.primary_web_endpoint
#   }
# }
