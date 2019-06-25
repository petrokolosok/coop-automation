import { assert } from 'chai';
import sel from '../selectors/home.page.js';
import exp from '../expected/home.page.js';


describe('General', function () {

    it('Browser URL', function () {
        browser.url('/');
        $(sel.siteName).waitForDisplayed();
        let SiteNameTrue = browser.getUrl();
        assert.equal(SiteNameTrue, exp.baseUrl);
    });

    it('Favicon is Displayed', function () {
        browser.url('/favicon.ico');
        $(sel.faviconImg).waitForDisplayed();
        let iconIsDisplayed = $(sel.faviconImg).isDisplayed();
        assert.isTrue(iconIsDisplayed);
    });

    it('Favicon Size', function () {
        browser.url('/favicon.ico');
        let icon = $(sel.faviconImg);
        let width = icon.getCSSProperty('width').parsed.value;
        let height = icon.getCSSProperty('height').parsed.value;
        let size = `${width}x${height}`;
        assert.equal(size, exp.faviconSize);
    });

    it('Page Title is "Cooperator "', function () {
        browser.url('/');
        $(sel.siteName).waitForDisplayed();
        let pageTitle = $(sel.siteName).getText().slice(0, 11);
        assert.equal(pageTitle, exp.pageTitleText);
    });




});