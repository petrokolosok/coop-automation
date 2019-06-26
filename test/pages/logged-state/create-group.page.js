import { assert } from 'chai';
import sel from '../../selectors/create-group.page';
import exp from '../../expected/create-group.page';



describe('Create Group', function () {

    it('Text "Create Group" is displayed', function () {
        browser.url('/');
        browser.pause(1000);
        let groupCreateText =  $(sel.groupCreateTitle).isDisplayed();
        assert.isTrue(groupCreateText);
    });

    it('Verify that text"Create Group" is located above "Name of Group" text', () => {
        browser.url('/');
        const text = $('h1');
        const location = text.getLocation();
        console.log(location);

        const xLocation = text.getLocation('x');
        console.log(xLocation);

        const yLocation = text.getLocation('label', 'y')
        console.log(yLocation);

    });

    it('Font Family', function () {
        let fontFamily = $(sel.groupCreateTitle).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let fontSize = $(sel.groupCreateTitle).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let fontWeight = $(sel.groupCreateTitle).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let fontColor = $(sel.groupCreateTitle).getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let textAlign = $(sel.groupCreateTitle).getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });



});
