import * as Faker from "faker/locale/en_US";

import { TestUser } from "../data/test-user"
import moment from 'moment';

export function getRandomUser(): TestUser {
  // Faker.locale ="en_US"
  // Faker.setLocale("en_US")
  let firstName = Faker.name.firstName();
  let lastName = Faker.name.lastName();
  let email = firstName.toLowerCase() + lastName.toLowerCase() + '@anz.com'
  let dob = new Date(Faker.date.between('1960-01-01', '2010-01-01'));
  let address1 = Faker.address.streetAddress()
  let address2 = Faker.address.streetAddress()

  console.log(dob)

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "Anz@123",
    dob_day: moment(dob).format('D'),
    dob_month: moment(dob).format('M'),
    dob_year: moment(dob).format('YYYY'),
    address1: address1,
    city: Faker.address.city(),
    state: Faker.address.state(),
    zipCode: Faker.address.zipCode().substr(0,5),
    phone: Faker.phone.phoneNumberFormat(5),
    country: "United States"
  }
}