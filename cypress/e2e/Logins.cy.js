import Login from "../PageObjects/LoginPage.js"



describe(' Login Page', () => {
    beforeEach(() => {
        cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
      });
                        

    it(' Valid LoginTest', () => {
       // cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
        const ln = new Login
        ln.setUsername("oluwakemi.dada@sproxil.com")
        ln.setPassword("Abc1234$*")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it('Invalid Email LoginTest', () => {
        //cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
        const ln = new Login
        ln.setUsername("oluwakemi.dada@gmail.com")
        ln.setPassword("Abc1234$*")
        ln.clickSubmit()
        ln.verifyErrorMessage
       
    })


    it('Invalid Password LoginTest', () => {
        //cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
        const ln = new Login
        ln.setUsername("oluwakemi.dada@gmail.com")
        ln.setPassword("Abc1234$*^")
        ln.clickSubmit()
        ln.verifyErrorMessage
    })



    it('Empty Email and Password LoginTest', () => {
       // cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
       cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
        const ln = new Login
        ln.setUsername(" ")
        ln.setPassword(" ")
        ln.clickSubmit()
        ln.verifyEmptyEmailandPassword
    })

    
// //Test1
//     it.skip("Valid Login ", () => {
//         cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
//         cy.contains("email").parent().find('input').type('oluwakemi.dada@sproxil.com');
//         cy.get('input[name="password"]').type('Abc1234$*');
//         cy.get('.inline-flex > span').click()
//         cy.contains("Dashboard")
//         cy.contains("oluwakemi.dada@sproxil.com")
//     })

//     //Test2
//     it.skip("Invalid Email Login ", () => {
//         cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
//         cy.contains("email").parent().find('input').type('oluwakeemi.dada@sproxil.com');
//         cy.get('input[name="password"]').type('Abc1234$*');
//         cy.get('.inline-flex > span').click()
//         cy.contains("Error")
      
//     })

//     //Test3
//     it.skip("Invalid Password Login ", () => {
//         cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
//         cy.contains("email").parent().find('input').type('oluwakemi.dada@sproxil.com');
//         cy.get('input[name="password"]').type('Abc12334$*');
//         cy.get('.inline-flex > span').click()
//         cy.contains("Unauthorized")
//         cy.contains("Error")
        
//     })

//     //Test4
//     it.skip("Should show error when credentials are empty", () => {
//         cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
//         cy.get('button[type="submit"]').click();
//         cy.contains('Only valid email is allowed').should('be.visible');
//         cy.contains('This field is required').should('be.visible');
       
        
//     })
//     it.skip('should show error when email and password fields are empty', () => {
//         cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
//         cy.get('button[type="submit"]').click(); 
//         cy.get('#email-error').should('contain', 'Email is required');
//         cy.get('#password-error').should('contain', 'Password is required');
})
             