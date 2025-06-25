describe('check whether spec', () => {
  it('test whether page loads', () => {
    cy.visit('http://localhost:3000')
    cy.get("#username").type("eve.holt@reqres.in")
    cy.get("#password").type("cityslicka")
    cy.get("#login").click()
    cy.get("#root > div > div > div:nth-child(2) > form > label:nth-child(1) > input[type=number]").type("20")
    cy.get("#root > div > div > div:nth-child(2) > form > label:nth-child(3) > input[type=number]").type("30")
    cy.get("#root > div > div > div:nth-child(2) > form > button:nth-child(5)").click()
    cy.get("#root > div > div > div:nth-child(2) > form > h1").contains("50")
    cy.get("#root > div > div > div:nth-child(1) > a:nth-child(21)").click()
    cy.get("#root > div > div > div:nth-child(2) > button").click()
    cy.get("#root > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(3)").contains("delectus")
    
  })
})