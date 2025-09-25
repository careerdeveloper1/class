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


