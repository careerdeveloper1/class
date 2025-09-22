variable "prefix1" {
  default = "vishal-"
}

variable "varenvrg" {}


module "rg_module" {
  source = "../RG"
  varrg  = var.varenvrg
  prefix = var.prefix1

}
