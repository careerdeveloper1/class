varenvrg = {
  rg1 = {
    rg-name  = "rg1"
    location = "westus"
  }
}

varenvsa ={
  sa1={
    sa-name= "vishalsa785"
    rg-name  = "rg1"
    location = "westus"
  }
}

varenvcont ={
  cont1={
    cont-name= "container1"
    container_access_type   = "container"
    sa= "sa1"
  }
  cont2={
    cont-name= "container2"
    container_access_type   = "container"
    sa= "sa1"
  }
}

varenvsw ={
  sw1={
    sw= "sa1"
  }
}
