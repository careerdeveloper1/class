terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.45.0"
    }
  }
}

provider "azurerm" {
  # Configuration options
  subscription_id= "0d1f337b-95f9-4b75-a683-8bc0ac9e4214"
  features {}
}
