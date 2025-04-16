//import Login from "../../PageObjects/LoginPage.js"


describe('POM', () => {

    // it('LoginTest', () => {
    //     cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
    //     cy.contains("email").parent().find('input').type('oluwakemi.dada@sproxil.com');
    //     cy.get('input[name="password"]').type('Abc1234$*').click();
    //     cy.get("button[type='submit']").click()
    //     cy.contains("Dashboard")
    //     cy.contains("oluwakemi.dada@sproxil.com")
    // })

    it.only('LoginTest', () => {
        cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        const ln = new Login
        ln.setUsername("oluwakemi.dada@sproxil.com")
        ln.setPassword("Abc1234$*")
        ln.clickSubmit()
        ln.verifyLogin()
    })
})