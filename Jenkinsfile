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
        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        COMMIT_M= sh(returnStdout: true, script: `git rev-list --format=%B --max-count=1 ${GIT_COMMIT}`)
       }
    steps{
       
     script{
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        docker.build("akib123/nodeapi:${GIT_COMMIT}","-f ./Dockerfile ./").push()
        }
    }
           
    }
}
} 
}
