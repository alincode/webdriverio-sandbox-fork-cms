import Page from './page';

let PageIndexPage = Object.create(Page, {
  content: {
    get: () => {
      return {
        title: 'Pages - My website - Fork CMS'
      };
    }
  },

  open: {
    value: () => {
      Page.open.call(this, 'private/en/pages/add');
    }
  },

  /* define elements */
});

module.exports = PageIndexPage;
