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
          
     script{
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        docker.build("akib123/nodeapi:v1.0","-f ./Dockerfile ./").push()
        }
    }
           
    }
}
} 
}
