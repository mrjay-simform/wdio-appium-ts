import { $ } from '@wdio/globals'
// import Page from './page.js';
class LoginPage {

    get loginPageNav() {
        return $('~Login');
    }

    get emailInput() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get passwordInput() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get submitBtn() {
        return $('//android.widget.TextView[@text="LOGIN"]');
    }

    public async loginWithUsernameAndPassword(username:string, password:string){
        await this.loginPageNav.click();
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }





    // await loginBtn.click();

    // await emailInput.addValue("admin@email.com");

    // await passwordInput.addValue("password");

    // await submitBtn.click();

    // await driver.pause(5000);

    // // await expect(driver.getAlertText).toExist();

    // console.log('Alert Text--> ', await driver.getAlertText());



    // await LoginPage.open()



    // await LoginPage.login('tomsmith', 'SuperSecretPassword!')

    // await expect(SecurePage.flashAlert).toBeExisting()

    // await expect(SecurePage.flashAlert).toHaveTextContaining(

    //     'You logged into a secure area!')

    //Scroll Actions

    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');



//     await $('Selector').click();

// await driver.pause(5000);

// await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("COMPATIBLE")').click();

// await driver.pause(5000);

}
export default new LoginPage();