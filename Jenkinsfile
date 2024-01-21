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
    environment{
        //GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        COMMIT_M= sh(returnStdout: true, script: 'git show -s --format=%B')
       }
    steps{
       
     script{
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        docker.build("akib123/nodeapi:${COMMIT_M}","-f ./Dockerfile ./").push()
        }
    }
           
    }
}
} 
}
