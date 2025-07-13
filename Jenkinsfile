pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "sadrian88/aromauto:latest"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/sadrian88/aromauto.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("${DOCKER_IMAGE}")
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withDockerRegistry(credentialsId: 'dockerhub-credentials', url: '') {
          script {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl rollout restart deployment nginx-deployment'
      }
    }
  }
}

