import LoginPage from './login.page'
class SignUpPage {
    get signUpTab(){
        return $('//android.widget.TextView[@text="Sign up"]');
    }
    get emailInput() {
        return $('~input-email');
    }
    get passwordInput() {
        return $('~input-password');
    }
    get confirmPasswordInput() {
        return $('~input-repeat-password');
    }
    get submitBtn() {
        return $('//android.widget.TextView[@text="SIGN UP"]');
    }
  
    public async doSignUp(username: string, password: string) {
        await LoginPage.loginPageNav.click();
        await this.signUpTab.click();
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(password);
        await this.submitBtn.click();

    }


}
export default new SignUpPage();