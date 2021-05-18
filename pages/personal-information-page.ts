import { Page } from "./base-page";
import { MyConfig } from "../config/my-config"

export class PersonalInfoPage extends Page {

    get genderMr() { return $('#id_gender1') }
    get genderMrs() { return $('#id_gender2') }
    get firstName() { return $('#customer_firstname') }
    get lastName() { return $('#customer_lastname') }
    get password() { return $('#passwd') }
    get days() { return $('#days') }
    get months() { return $('#months') }
    get years() { return $('#years') }
    get addrFirstname() { return $('#firstname') }
    get addrLastname() { return $('#lastname') }
    get addrLine1() { return $('#address1') }
    get addrCity() { return $('#city') }
    get addrState() { return $('#id_state') }
    get addrPostCode() { return $('#postcode') }
    get addrPostCountry() { return $('#id_country') }
    get addrMobile() { return $('#phone_mobile') }
    get addrAlias() { return $('#alias') }
    get registerButton() { return $('#submitAccount') }

    fillInPersonalInfo(gender: boolean, fname: string, lname: string, password: string, days: string, months: string, years: string, addrline1: string, addrcity: string, addrstate: string, addrpostcode: string, addrcountry: string, addrmobile: string, addralias: string) {
        this.genderMr.click()
        this.firstName.setValue(fname);
        this.lastName.setValue(lname);
        this.password.setValue(password);
        this.days.selectByAttribute("value", days);
        this.months.selectByAttribute("value", months);
        this.years.selectByAttribute("value", years);
        this.addrFirstname.setValue(fname);
        this.addrLastname.setValue(lname);
        this.addrLine1.setValue(addrline1);
        this.addrCity.setValue(addrcity);
        this.addrState.selectByVisibleText(addrstate)
        this.addrPostCode.setValue(addrpostcode);
        this.addrPostCountry.selectByVisibleText(addrcountry)
        this.addrMobile.setValue(addrmobile);
        this.addrAlias.setValue(addralias);
    }

    clickRegister() {
        this.registerButton.click()
    }
}


