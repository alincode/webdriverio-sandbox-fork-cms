import AuthPage from '../pageobjects/auth.page';

describe('auth @watch', () => {
  let newPageName;

  before(function() {
    var crypto = require('crypto');
    var buf = crypto.randomBytes(32);
    newPageName = buf.toString('hex');
  });

  it('login', () => {
    browser.url('http://demo.fork-cms.com/private/en/authentication');
    browser.element('#backendEmail').setValue(AuthPage.content.account);
    browser.element('#backendPassword').setValue(AuthPage.content.password);
    browser.element('[name=login]').click();
  });

  it('new page', () => {
    browser.url('http://demo.fork-cms.com/private/en/pages/index');
    browser.element('.btn-group a').click();
    browser.element('#title').setValue(newPageName);
    browser.element('#addButton').click();
    browser.isExisting('.alert-success').should.be.equal(true);
  });

});
