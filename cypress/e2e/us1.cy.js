
/// <reference types="cypress"/>
describe("US1 : Accéder à la page d'acceuil", () => {
    it("TC-US1-01 : Accéder à la page d'acceuil", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('#slider-carousel > .carousel-inner')
            .should('be.visible')
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper')
            .should('be.visible')
    })
})
