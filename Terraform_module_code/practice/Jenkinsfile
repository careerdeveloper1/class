pipeline {
    agent any

    stages {
        stage('terraform init') {
            steps {
                withCredentials([azureServicePrincipal('welcome')]) {
                    sh '''
                    cd /home/welcomeuser/practice/RG
                    az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID
                    terraform init
                    terraform plan
                    terraform apply -auto-approve
                    '''
                }
            }
        }
    }
}


// pipeline {
//     agent any
//     stages {
//         stage('isntall nginx') {
//             steps {
//                 sh '''sudo apt-get update
//                 sudo apt-get install -y nginx
//                 sudo nginx -v'''
//             }
//         }
//     }
// }
