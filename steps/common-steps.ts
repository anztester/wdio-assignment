import { Given } from '@cucumber/cucumber';

Given(
    /^I click on link text "([^"]*)?"$/,
    function (linktext: string) {
        $('=' + linktext).click();
    }
)

Given(
    /^I wait for (\d+) seconds$/,
    function (seconds) {
        browser.pause(seconds * 1000)
    }
)