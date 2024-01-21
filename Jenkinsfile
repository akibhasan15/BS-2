pipeline {
    def commit-id
    agent any
    stages{
        //Automatically it will checkout scm
stage('CommitID'){

    steps{
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit-id=readfile('.git/commit-id').trim()
    }
}

// stage('Test') {
//                steps{

//                    nodejs(nodeJSInstallationName: 'nodejs'){
//                     sh 'npm install'
                    
//                    }
// }
// } 
// stage('Build Image and Push') {

//     steps{
          
//      script{
//         withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
//         docker.build("akib123/nodeapi:${commit-id}","-f ./Dockerfile ./").push()
//         }
//     }
           
//     }
// }
// } 
// }
