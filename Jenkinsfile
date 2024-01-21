pipeline {
  agent any
    stages{
        

stage('Test') {
               steps{

                   nodejs(nodeJSInstallationName: 'nodejs'){
                    sh 'npm install'
                    
                   }
}
} 
stage('Build Image and Push') {

    steps{
       environment{
        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
       }
     script{
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        docker.build("akib123/nodeapi:${GIT_COMMIT}","-f ./Dockerfile ./").push()
        }
    }
           
    }
}
} 
}
