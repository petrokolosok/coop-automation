import { assert } from 'chai';
import sel from '../../selectors/selectors';


describe('Create Event', function () {

    it('Text "Create Event" is displayed', function () {
        browser.url('/');
        browser.pause(1000);
        let eventCreateText =  $(sel.eventCreatTitle).isDisplayed();
        assert.isTrue(eventCreateText);
    });

});