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
      return $.element('#backendEmail');
    }
  },
  password: {
    get: () => {
      return $.element('#backendPassword');
    }
  },
  loginButton: {
    get: () => {
      return $.element('[name=login]');
    }
  }
});

module.exports = AuthPage;
