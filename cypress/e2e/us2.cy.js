/// <reference types="cypress"/>
describe("US2 : Créer un compte", () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })

    it("TC-US2-01 : Cliquer sur le bouton Signup / Login", () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.url().should("include", "/login")
    })

    it("TC-US2-02 : Créer un compte valide", () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type("david")
        cy.get('[data-qa="signup-email"]').type("David112@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should("include", "/signup")
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type("0000")
        cy.get('[data-qa="days"]').select("16")
        cy.get('[data-qa="months"]').select("December")
        cy.get('[data-qa="years"]').select("2021")
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type("David")
        cy.get('[data-qa="last_name"]').type("WILS")
        cy.get('[data-qa="company"]').type("INSY2S")
        cy.get('[data-qa="address"]').type("AFPA ROUBAIX")
        cy.get('[data-qa="country"]').select("Canada")
        cy.get('[data-qa="state"]').type("Québec")
        cy.get('[data-qa="city"]').type("Québec")
        cy.get('[data-qa="zipcode"]').type("01")
        cy.get('[data-qa="mobile_number"]').type("+1651479822")
        cy.get('[data-qa="create-account"]').click()
        cy.url().should("include", "/account_created")
        cy.get('[data-qa="continue-button"]').click()
       
    })


    it("TC-US2-03 : Créer un compte invalide", () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type("David")
        cy.get('[data-qa="signup-email"]').type("David14gmail.com")
         cy.get('[data-qa="signup-button"]').click()
    })

})
