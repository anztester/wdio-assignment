import { Given } from '@cucumber/cucumber';
import { SigninPage } from "../pages/signin-page"
import { PersonalInfoPage } from '../pages/personal-information-page';
import { TestUser } from '../data/test-user';
import * as Util from "../support/fake-user"
import { HomePage } from '../pages/home-page';

let signInPage = new SigninPage();
let personalInfoPage = new PersonalInfoPage();
let user: TestUser;
let homePage = new HomePage();

Given(
    /^I am a new user$/,
    function () {
        user = Util.getRandomUser();
        console.log(user);
    }
);

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    function (option, url) {
        browser.url(url)
    }
);

Given(
    /^I create account with my email id$/,
    function () {
        signInPage.createAccount(user.email)
    }
);

Given(
    /^I fill in my personal information$/,
    function () {
        personalInfoPage.fillInPersonalInfo(true, user.firstName, user.lastName, user.password, user.dob_day, user.dob_month, user.dob_year, user.address1, user.city, user.state, user.zipCode, user.country, user.phone, user.lastName);
        personalInfoPage.clickRegister();
    }
);

Given(
    /^I should see create account button present$/,
    function () {
        signInPage.verifyCreateAccountButtonPresent();
    }
);

Given(
    /^I login$/,
    function () {
        signInPage.signin(user.email, user.password)
    }
)

Given(
    /^I verify correct account name is shown on the page$/,
    function () {
        homePage.verifyAccountName(user.firstName, user.lastName);
    }
);