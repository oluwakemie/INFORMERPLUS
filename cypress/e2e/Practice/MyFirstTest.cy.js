describe('Suite Name', () => {

    it('verify title positive', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.title().should('eq', 'Swag Labs')
    })

    it('verify title negative', () => {
        cy.visit("https://www.saucedemo.com/") 
        cy.title().should('eq', 'SuaceDemo')
    })
  })