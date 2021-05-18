import { Page } from "./base-page";
import { expect } from "chai";
import { MyConfig } from "../config/my-config"

export class HomePage extends Page {

    get accountName() { return $('.account span') }
    get logOutLink() { return $('.logout') }
    get searchBox() { return $('#search_query_top') }
    get searchButton() { return $('.button-search') }
    get productImage() { return $('.product-image-container a img') }
    get addToCartButton() { return $('button.exclusive') }
    get cartCheckout() { return $("//a/span[contains(text(),'Proceed to checkout')]") }
    get checkoutSummary() { return $(".standard-checkout") }
    get checkoutAddress() { return $("button[name='processAddress']") }
    get checkoutShipping() { return $("button[name='processCarrier']") }
    get termsOfServiceCheckBox() { return $("#cgv") }
    get paymentProductName() { return $(".cart_description .product-name a") }
    get paymentOption() { return $(".bankwire") }
    get confirmOrderButton() { return $("//button/span[contains(text(),'I confirm my order')]") }
    get checkoutSuccessMessage() { return $(".cheque-indent") }

    open() {

    }

    verifyAccountName(fname, lname) {
        let accountname = this.accountName.getText();
        expect(accountname).to.eql(fname + ' ' + lname);
    }

    logout() {
        this.logOutLink.click();
    }

    searchProduct(productName: string) {
        this.searchBox.setValue(productName)
        this.searchButton.click()
    }

    quickViewSearchResult() {
        this.productImage.waitForClickable(MyConfig.customTimeout);
        this.productImage.click()
    }

    addItemToCart() {
        this.addToCartButton.waitForClickable(MyConfig.customTimeout);
        this.addToCartButton.click()
    }

    proceedToCheckout() {
        this.cartCheckout.waitForClickable(MyConfig.customTimeout);
        this.cartCheckout.click()
        this.checkoutSummary.waitForClickable(MyConfig.customTimeout);
        this.checkoutSummary.click()
        this.checkoutAddress.waitForClickable(MyConfig.customTimeout);
        this.checkoutAddress.click()
        this.termsOfServiceCheckBox.click();
        this.checkoutShipping.waitForClickable(MyConfig.customTimeout);
        this.checkoutShipping.click()
    }

    verifyProductInPaymentsPage(productname: string) {
        expect(this.paymentProductName.getText()).to.eql(productname);
    }

    choosePaymentOption() {
        this.paymentOption.click();
    }

    confirmOrder() {
        this.confirmOrderButton.click();
    }

    verifyCheckoutSuccess(message: string) {
        expect(this.checkoutSuccessMessage.getText()).to.eql(message);
    }
}