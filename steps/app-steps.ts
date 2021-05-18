import { Given } from '@cucumber/cucumber';
import * as Util from "../support/fake-user"
import { SigninPage } from "../pages/signin-page"
import { PersonalInfoPage } from '../pages/personal-information-page';
import { HomePage } from '../pages/home-page';


let signInPage = new SigninPage();
let personalInfoPage = new PersonalInfoPage();
let homePage = new HomePage();

Given(
    /^I logout$/,
    function () {
        homePage.logout();
    }
)

Given(
    /^I search product "([^"]*)?"$/,
    function (productname: string) {
        homePage.searchProduct(productname)
    }
)

Given(
    /^I click on the search result$/,
    function () {
        homePage.quickViewSearchResult();
    }
)

Given(
    /^I add item to cart$/,
    function () {
        homePage.addItemToCart();
    }
)

Given(
    /^I proceed to checkout$/,
    function () {
        homePage.proceedToCheckout()
    }
)

Given(
    /^I verify the product "([^"]*)?" is shown in the payments page$/,
    function (productname) {
        homePage.verifyProductInPaymentsPage(productname);
    }
)

Given(
    /^I choose payment option$/,
    function () {
        homePage.choosePaymentOption();
    }
)

Given(
    /^I confirm the order$/,
    function () {
        homePage.confirmOrder();
    }
)

Given(
    /^I verify checkout success message "([^"]*)?"$/,
    function (message) {
        homePage.verifyCheckoutSuccess(message);
    }
)