import Login from "../PageObjects/LoginPage.js"

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
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click
        cy.get("h3[class='font-semibold leading-none tracking-tight my-[10px]']").contains("List of all clients")
    })
})
