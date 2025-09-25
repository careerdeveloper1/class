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