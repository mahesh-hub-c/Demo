pipeline{
    agent any
    parameters{
        choice(
            name:'Product',
            choices:['UBRELVY','QULIPTA'],
            description:'Select the product'
        ),
        choice(
            name:'Franchise',
            choices:['Rheum','Derm-AD','Derm','Gastro','Oncology','Psych','Migraine'],
            description:'Select the franchise'
        )
    }
    stages{
        stage('install dependencies{
            steps{
            bat 'npm ci',
            bat 'npx playwright install chromium'
            }

        }
        stage('Run Playwright test'){
            steps{
                withEnv(["Franchise=${params.Franchise}"]){
                    bat 'npx playwright test Sypher.spec.js'
                }
            }
        }
    }
}