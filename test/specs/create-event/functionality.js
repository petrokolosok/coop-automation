import { assert } from 'chai';

describe('Test', function() {
  describe('Test1', function() {
    it('Title', function() {
      browser.url('/');
      console.log(browser.getTitle());
    });
  });
});
