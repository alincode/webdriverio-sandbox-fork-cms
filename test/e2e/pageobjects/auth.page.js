import Page from './page';

let AuthPage = Object.create(Page, {
  content: {
    get: () => {
      return {
        account: 'demo@fork-cms.com',
        password: 'demo'
      };
    }
  },

  open: {
    value: () => {
      Page.open.call(this, 'private/en/authentication');
    }
  },

  /* define elements */
  account: {
    get: () => {
      return browser.element('#backendEmail');
    }
  },
  password: {
    get: () => {
      return browser.element('#backendPassword');
    }
  },
  loginButton: {
    get: () => {
      return browser.element('[name=login]');
    }
  }
});

module.exports = AuthPage;
