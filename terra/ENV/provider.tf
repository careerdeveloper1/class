terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.45.0"
    }
  }
}

provider "azurerm" {
  # Configuration options
  subscription_id= "e5cb9ec6-5677-4ceb-81de-c20081fb79a9"
}
