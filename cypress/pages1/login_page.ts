export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'
    
    loginWithValidCredentials(username: string, password: string){
        cy.get(this.loginPage_username).type(username)
        cy.get(this.loginPage_password).type(password)
        cy.get(this.loginPage_loginButton).click()
        cy.contains('Login Successfull')
        
  
    }

     loginWithInvalidCredentials(username: string, password: string){
         cy.get(this.loginPage_username).type(username)
         cy.get(this.loginPage_password).type(password)
         cy.get(this.loginPage_loginButton).click()

         cy.on('window:alert', (txt)=>{
              expect(txt).to.be.equal('Wrong Credential Try again')

        })
    
    
}
    navigate(url: string){
        cy.visit(url)
    }

    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}