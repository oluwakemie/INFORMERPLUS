class Login

    {
        setUsername(username)
            {
                cy.contains("email").parent().find('input').type(username);
            }


        setPassword(password)
            {
                cy.get('input[name="password"]').type(password);
            }

        clickSubmit(submit)
            {
                cy.get("button[type='submit']").click()
               
            }

            verifyLogin()
            {
                cy.get('a.peer\\/menu-button').contains('Dashboard')
                .should('be.visible').click();

                cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)").contains("oluwakemi.dada@sproxil.com")
               // cy.get('.inline-flex').click()
            }

            verifyErrorMessage()
            {
                cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1)").should('have.text', 'Error')
            }
            
            verifyEmptyEmailandPassword()
            {
                cy.get("p[id=':r0:-form-item-message']").should('have.text', 'Only valid email is allowed')
                cy.get("p[id=':r1:-form-item-message']").should('have.text','This field is required')
            }

            verifyLogout()
            {
                cy.get("svg[type='button']").click()
                cy.get("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-secondary bg-background hover:bg-primary hover:text-primary-foreground hover:border-none h-9 px-4 py-2 border-0 shadow-none disabled:!cursor-default disabled:!bg-muted']").click()
            }

            

    }
    export default Login;
