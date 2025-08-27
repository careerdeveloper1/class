# Resource Groups

varenvrg = {
  rg1 = {
    name     = "welcome-rg1"
    location = "east us"
  }
  # rg2 = {
  #   name     = "welcome-rg2"
  #   location = "west us"
  # }

}


# varenvsa = {
#   sa1 = {
#     name                     = "welcomesa1"
#     resource_group_name      = "welcome-rg1"
#     location                 = "east us"
#     account_replication_type = "GRS"
#     account_tier             = "Standard"
#   }
#   sa2 = {
#     name                     = "welcomesa2"
#     resource_group_name      = "welcome-rg2"
#     location = "west us"
#     account_replication_type = "GRS"
#     account_tier             = "Standard"
#   }
# }
# varenvcont = {
#   cont1 = {
#     cont-name                  = "welcome-cont1"
#     container_access_type = "private"
#     sa="sa1"
#   }
#   cont2 = {
#     cont-name                  = "welcome-cont2"
#     container_access_type = "private"
#     sa="sa1"
#   }
#   cont3 = {
#     cont-name                  = "welcome-cont3"
#     container_access_type = "private"
#     sa="sa2"
#   }
#   cont4 = {
#     cont-name                  = "welcome-cont4"
#     container_access_type = "private"
#     sa="sa2"
#   }
# }

varenvvn = {
  vn1 = {
    name                = "welcome-vn1"
    resource_group_name = "welcome-rg1"
    location            = "east us"
    address_space       = ["10.1.0.0/16"]
  }
  # vn2 = {
  #   name                = "welcome-vn2"
  #   resource_group_name = "welcome-rg2"
  #   location            = "west us"
  #   address_space       = ["10.2.0.0/16"]
  # }

}
varenvsn = {
  sn1 = {
    name                 = "welcome-sn11"
    resource_group_name  = "welcome-rg1"
    virtual_network_name = "welcome-vn1"
    address_prefixes     = ["10.1.10.0/28"]
  }
  # sn2 = {
  #   name                 = "welcome-sn2"
  #   resource_group_name  = "welcome-rg2"
  #   virtual_network_name = "welcome-vn2"
  #   address_prefixes     = ["10.2.20.0/28"]
  # }

}

varenvpi = {
  pi1 = {
    name                = "welcome-pip1"
    resource_group_name = "welcome-rg1"
    location            = "east us"
    allocation_method   = "Static"
  }
  # pi2 = {
  #   name                = "welcome-pip2"
  #   resource_group_name = "welcome-rg2"
  #   location            = "west us"
  #   allocation_method   = "Static"
  # }
}


varenvni = {
  ni1 = {
    name                          = "welcome-ni1"
    resource_group_name           = "welcome-rg1"
    location                      = "east us"
    public                        = "pi1"
    subnet                        = "sn1"
    ip-name                       = "welcome-ip1"
    private_ip_address_allocation = "Dynamic"
  }
  # ni2 = {
  #   name                          = "welcome-ni2"
  #   resource_group_name           = "welcome-rg2"
  #   location                      = "west us"
  #   public                        = "pi2"
  #   subnet                        = "sn2"
  #   ip-name                       = "welcome-ip2"
  #   private_ip_address_allocation = "Dynamic"
  # }
}


# Virtual Machines
varenvvm = {
  vm1 = {
    name                = "welcome-VM"
    ni                  = "ni1"
    resource_group_name = "welcome-rg1"
    location            = "east us"
    size                = "Standard_D4s_v3"
    username            = "welcomeuser"
    password            = "welcome@12345"
  }
  # vm2 = {
  #   name                = "BE-VM"
  #   ni                  = "ni2"
  #   resource_group_name = "welcome-rg2"
  #   location            = "west us"
  #   size                = "Standard_F2"
  #   username            = "welcomeuser"
  #   password            = "welcome@12345"
  # }

}

# Network Security Groups
varenvnsg = {
  nsg1 = {
    name                = "welcome-nsg1"
    location            = "east us"
    resource_group_name = "welcome-rg1"
  }
  # nsg2 = {
  #   name                = "welcome-nsg2"
  #   location            = "west us"
  #   resource_group_name = "welcome-rg2"
  # }

}

# Network Security Group Network Interface Attachments
varenvnsgni = {
  nsgni1 = {
    nsg-name            = "welcome-nsg1"
    resource_group_name = "welcome-rg1"
    ni-name             = "welcome-ni1"
  }
  # nsgni2 = {
  #   nsg-name            = "welcome-nsg2"
  #   resource_group_name = "welcome-rg2"
  #   ni-name             = "welcome-ni2"
  # }

}
