variable "varenvrg" {
  
}

module "rg-mod" {
  source = "../RG"
  varrg = var.varenvrg
  
}
