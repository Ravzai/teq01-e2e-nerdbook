const posts = require("../../fixtures/post.json");

describe('Testen van post', () => {
    beforeEach(() => {
      cy.fixture('post.json').as('post');
    });
  
    it('Moet een nieuw bericht toevoegen en controleren', function () {
      cy.get('@post').then((post) => {
        cy.request({
          method: 'POST',
          url: 'https://coders-network-api.herokuapp.com/posts',
          body: post,
        });
      });
    });
  });
  