// sample.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Rakuten TV Challenge', () => {
  it('Opens Rakuten TV sign in page', () => {
    cy.visit('https://rakuten.tv/es/sessions/sign_in');
    cy.wait(5000);

    //cy.get("form");
    cy.get('input[placeholder="Escribe tu dirección de email o Rakuten ID"]').type("otuschling@gmail.com");
    cy.get('input[type="password"]').first().type("Aleixlaia0811");

    cy.get('form').first().submit();
    //cy.get('form__submit[class="button__contents__call"]').first().click();

    // Accept
 })

 it('Click on any movie', () => {
    cy.get('a[href*="/es/movies/superintelligence"]').click()

 })

 it('Add the movie to the wish list', () => {
     cy.get('span[class*="round-action__element"]').last().click()

  })
})





