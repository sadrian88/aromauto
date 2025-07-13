pipeline {
  agent any

  stages {
    stage('Checkout cod') {
      steps {
        git 'https://github.com/sadrian88/aromauto.git'
      }
    }

    stage('Test modificări') {
      steps {
        echo 'Am luat ultima versiune din GitHub!'
        sh 'ls -la' // Doar să vedem ce fișiere sunt
      }
    }
  }
}
