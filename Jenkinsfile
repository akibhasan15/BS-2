pipeline {
    agent any
    stages{
        //Automatically it will checkout scm
stage('Test') {
               steps{
                
                   
                   nodejs(nodeJSInstallationName: 'nodejs'){
                    sh 'npm install'
                    //Every time any shell command or anything executed, it throw me on parent directory
                    // found in /var/jenkins_home/workspace/node-app1/
                    //sh 'npm test'
                    
                   }
}
} 
stage('Build Image and Push') {

    steps{
          // sh 'docker build -t akib123/node-app1:v1.0 -f ./app1/build/Dockerfile ./app1/src/'
     script{
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        docker.build("akib123/node-app1:v1.0","-t nodeapi .").push()
        }
    }
           
    }
}
//  stage('Deploy') {
           
//             steps{
                 
//                sshagent(credentials: ['illusion']) {
//                withCredentials([string(credentialsId: 'USER@KubeServer', variable: 'userAtIP')]) {
//     // some block
//                 sh 'scp ./app1/deploy/app1.yaml ./app1/deploy/service.yaml   ${userAtIP}: '
//                 sh 'ssh ${userAtIP} "minikube kubectl -- apply -f app1.yaml"'
//                 sh 'ssh ${userAtIP} "minikube kubectl -- apply -f service.yaml"'
//                 sh 'ssh ${userAtIP} "rm ./app1.yaml ./service.yaml"'
// }
               
               
            //}
            //}
  //  } 
} 
}
