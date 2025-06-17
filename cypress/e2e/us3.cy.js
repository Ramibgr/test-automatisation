/// <reference types="cypress"/>
describe("US3 : Éviter les doublons d’inscription", () => {
    it("TC-US3-01 : effectuer deux inscriptions avec le meme mail ", () => {
        cy.visit("https://automationexercise.com/")
    })
})
