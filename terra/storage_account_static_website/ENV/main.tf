# variable "varenvstwebapp" {}
variable "varenvrg" {}
variable "prefix1" {
  default = "vishal-"
}

module "rg_module" {
  # source = "../../rg_etc/RG/"
  source = "git::https://github.com/careerdeveloper1/class.git//terra/rg_etc/RG"
  varrg  = var.varenvrg
  prefix = var.prefix1

}


module "sa_module" {
  # source = "../../rg_etc/RG/"
  depends_on = [ module.rg_module ]
  source = "git::https://github.com/careerdeveloper1/class.git//terra/rg_etc/SA"
  varsa  = var.varenvsa
  prefix = var.prefix1
}