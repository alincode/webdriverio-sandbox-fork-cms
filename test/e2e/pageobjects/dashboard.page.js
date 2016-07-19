import Page from './page';

let DashboardPage = Object.create(Page, {
  content: {
    get: () => {
      return {
        title: 'Dashboard - My website - Fork CMS'
      };
    }
  },

  open: {
    value: () => {
      Page.open.call(this, 'private/en/authentication');
    }
  },

  /* define elements */
});

module.exports = DashboardPage;
