import signupPage from "../../pageobjects/signup.page"

describe('Signup to WDIO using given credentials! ',()=>{
    
    it('should able to signup using given credentials.',()=>{
        signupPage.doSignUp("jay@simform.com","Welcome1");
    })



})