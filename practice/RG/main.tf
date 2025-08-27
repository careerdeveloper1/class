# variable "varenvkv" {}



variable "varenvrg" {}
module "rg-mod" {
  source = "git::https://github.com/careerdeveloper1/code.git//RG"
  varrg = var.varenvrg
  
}

# variable "varenvvn" {}
# module "vn-mod" {
#   source = "git::https://github.com/careerdeveloper1/code.git//VN"
#   varvn = var.varenvvn
#   depends_on = [ module.rg-mod ]
  
# }


# variable "varenvsn" {}

# module "sn-mod" {
#   source = "git::https://github.com/careerdeveloper1/code.git//SN"
#   varsn = var.varenvsn
#   depends_on = [ module.vn-mod ]
  
# }


# variable "varenvpi" {}

# module "pi-mod" {
#   source = "git::https://github.com/careerdeveloper1/code.git//PI"
#   varpi = var.varenvpi
#   depends_on = [ module.rg-mod ]
  
# }


# variable "varenvni" {}

# module "ni-mod" {
#   depends_on = [ module.pi-mod, module.sn-mod, module.vn-mod ]
#   source = "git::https://github.com/careerdeveloper1/code.git//NI"
#   varni = var.varenvni
#   vardatapi = var.varenvpi
#   vardatasi = var.varenvsn
  
  
# }

# variable "varenvvm" {}
# module "vm-mod" {
#   depends_on = [ module.ni-mod, module.sn-mod ]
#   source = "git::https://github.com/careerdeveloper1/code.git//VM"
#   varvm= var.varenvvm
#   vardatanic= var.varenvni
#   # varkv = var.varenvkv
# }

# variable "varenvnsg" {}

# module "nsg-mod" {
#   depends_on = [ module.rg-mod ]
#   source = "git::https://github.com/careerdeveloper1/code.git//NSG"
#   varnsg = var.varenvnsg
# }


# variable "varenvnsgni" {}
# module "nsgni-mod" {
#   depends_on = [ module.nsg-mod, module.ni-mod ]
#   source = "git::https://github.com/careerdeveloper1/code.git//NSGNI"
#   varnsgni = var.varenvnsgni
  
# }


this is vishal
this is Ananya

 this is akshay
 this is Ananya 2
