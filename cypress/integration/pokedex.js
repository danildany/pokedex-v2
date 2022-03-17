/// <reference types="Cypress" />

const URL = "http://127.0.0.1:5500/index.html";

context("Pokedex", () => {
  before(() => {
    cy.visit(URL);
  });
  describe("usa el pokedex", () => {
    it("se asegura que se muestren las pantallas de carga", () => {
      cy.get(".cover").should("not.have.class", "hide");
      cy.get(".right-container__screen > div").should(($divs) => {
        expect($divs).to.have.length(20);
        expect($divs.eq(0)).to.contain("loading...");
      });
    });
    it("se asegura que el primer pokemon mostrado sea el primero de la lista", () => {
      cy.get(".poke-name").contains("Bulbasaur");
    });
    it("se asegura que se cambien las listas de pokemon", () => {
      cy.get(".right-button").click();
      cy.get(".right-container__screen > div").should(($divs) => {
        expect($divs).to.have.length(20);
        expect($divs.eq(19)).to.contain("40. Wigglytuff");
        $divs.eq(19).click();
      });
      cy.get(".poke-name").contains("Wigglytuff");
    });
  });
});
