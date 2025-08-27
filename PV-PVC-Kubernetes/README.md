# PV-PVC-Kubernetes
Create a pod for say nginx and create the volume on Azure fileshare
1. create YAML files for PV, PVC and Pods.
2. crate the azure secret and run using kubectl:
kubectl create secret generic dodo-secret --from-literal=azurestorageaccountname=<SA name? --from-literal=azurestorageaccountkey=<Key>
