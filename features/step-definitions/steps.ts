import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {

});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {

});

