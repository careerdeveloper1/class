variable "prefix1" {
  default = "vishal-"
}
variable "varenvrg" {}
module "rg_module" {
  source = "../RG"
  varrg  = var.varenvrg
  prefix = var.prefix1
}

variable "varenvsa" {}
module "sa_module" {
  depends_on = [ module.rg_module ]
  source = "../SA"
  varsa  = var.varenvsa
  prefix = var.prefix1
}

variable "varenvcont" {}
module "cont_module" {
  depends_on = [ module.sa_module, module.rg_module ]
  source = "../../rg_etc/CONT/"
  # source = "git::https://github.com/careerdeveloper1/class.git//terra/rg_etc/CONT"
  varcont  = var.varenvcont
  prefix = var.prefix1
  varsa-data= var.varenvsa
}

variable "varenvsw" {}
module "sw_module" {
  depends_on = [ module.sa_module, module.rg_module, module.cont_module ]
  source = "../../rg_etc/SW/"
  # source = "git::https://github.com/careerdeveloper1/class.git//terra/rg_etc/SW"
  varsw= var.varenvsw
  prefix = var.prefix1
  varsa-data= var.varenvsa
}