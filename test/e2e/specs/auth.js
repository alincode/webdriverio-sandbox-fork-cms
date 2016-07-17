import AuthPage from '../pageobjects/auth.page';

describe('auth', () => {

  it('login failure', () => {
    AuthPage.open();
    AuthPage.account.setValue(AuthPage.content.account);
    AuthPage.password.setValue(AuthPage.content.password + 1);
    AuthPage.loginButton.click();
    $.element('.alert-dismissible').isExisting().should.be.equal(true);
  });

  it('login successful', () => {
    AuthPage.open();
    AuthPage.account.setValue(AuthPage.content.account);
    AuthPage.password.setValue(AuthPage.content.password);
    AuthPage.loginButton.click();
  });
});
