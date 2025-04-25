import Login from "../../PageObjects/LoginPage.js"

describe('Login Page', () => {
    beforeEach('LoginSession', () => {
        cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
        const ln = new Login
        ln.setUsername("oluwakemi.dada@sproxil.com")
        ln.setPassword("Abc1234$*")
        ln.clickSubmit()
        ln.verifyLogin()
       
    })

    it('',()=>{
       
    })
})
