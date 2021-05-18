import { Page } from "./base-page";
import { MyConfig } from "../config/my-config"
import { expect } from "chai";

export class SigninPage extends Page {

    get signInLink() { return $('.login') }
    get loginEmail() { return $('#email') }
    get loginPassword() { return $('#passwd') }
    get loginSubmit() { return $('#SubmitLogin') }
    get createAccountEmail() { return $('#email_create') }
    get createAccountButton() { return $('#SubmitCreate') }

    navigate() {
        this.signInLink.click()
    }

    signin(email: string, password: string) {
        this.loginEmail.setValue(email);
        this.loginPassword.setValue(password);
        this.loginSubmit.click();
    }

    verifyCreateAccountButtonPresent(){
        this.createAccountButton.waitForClickable(MyConfig.customTimeout);
        expect(this.createAccountButton.isDisplayed()).to.equal(true)
    }

    createAccount(email: string) {
        this.createAccountEmail.setValue(email);
        this.createAccountButton.click()
    }
}


