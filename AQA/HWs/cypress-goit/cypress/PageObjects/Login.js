class LoginPage {
    
    get urlLoginPage() {
        return "https://www.edu.goit.global/account/login";
    }

    get emailField() {
        return cy.get('#user_email');
    }

    get passwordField(){
        return cy.get('#user_password');
    }
    
    get loginButton(){
        return cy.get('button[type="submit"]');
    }

    navigateToLoginPage(){
        cy.visit(this.urlLoginPage);
    }

    verifyEmailField(){
        this.emailField.should("be.visible");
    }

    inputEmail(email){
        this.emailField.type(email);
    }

    verifyPasswordField(){
        this.passwordField.should("be.visible");
    }

    inputPassword(password){
        this.passwordField.type(password,{sensitive:true});
    }

    verifyLoginButton(){
        this.loginButton.should("be.visible");
    }
}

export default LoginPage;
