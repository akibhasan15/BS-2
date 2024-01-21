pipeline {
    agent any
    stages{
        //Automatically it will checkout scm, so no worries

} 
stage('Build') {

    steps{
           sh 'docker build -t akib123/node-app1:v1.0 -f ./app1/build/Dockerfile ./app1/src/'
           
    }
} 
 stage('Deployment') {
           
            steps{
                 
               sshagent(credentials: ['illusion']) {
               withCredentials([string(credentialsId: 'USER@KubeServer', variable: 'userAtIP')]) {
    // some block
                sh 'scp ./app1/deploy/app1.yaml   ${userAtIP}:Desktop/ '
                sh 'ssh ${userAtIP} "minikube kubectl -- apply -f Desktop/app1.yaml"'
}
               
               
                

    }
            }
    }
} 

}
