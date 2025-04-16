describe('Custom commands', ()=>{

    it.only("handling links",()=>{
        cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        cy.contains("email").parent().find('input').type('oluwakemi.dada@sproxil.com');
        cy.get('input[name="password"]').type('Abc1234$*');
        cy.get('.inline-flex').click()
        cy.contains("Dashboard")
        cy.contains("oluwakemi.dada@sproxil.com")
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        // cy.get("div[class='product-name'] h1").should('have.test','Apple MacBook Pro')
    })

    it("overwriting existing command",()=>{

    })

    it("Login command",()=>{

    })

})