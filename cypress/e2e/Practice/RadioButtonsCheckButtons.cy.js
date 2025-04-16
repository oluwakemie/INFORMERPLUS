describe("Check UI Elements", () =>{

    // it("Checking Radio Buttons", () =>{

     //  cy.visit("https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com")

    //     //visibility of radio buttons
    //     cy.get("input#male").should("be.visible")
    //     cy.get("input#female").should("be.visible")

    //     //selecting radio buttons
    //     cy.get("input#male").check().should('be.checked')
    //     cy.get("input#female").should("not.be.checked")

    //     cy.get("input#female").check().should('be.checked')
    //     cy.get("input# male").should("not.be.checked")
    // })

    it("Checking Check Buttons", () =>{

        cy.visit("https://artoftesting.com/samplesiteforselenium?utm_source=chatgpt.com")

        // //visibility the elements
        // cy.get("input[value='Automation']").should("be.visible")
       

        // //selecting single checkbox - Automation
        // cy.get("input[value='Automation']").check().should('be.checked')
       
        //  //Unselecting single checkbox - Automation
        //  cy.get("input[value='Automation']").uncheck().should('not.be.checked')


        //Selecting all the Checkboxes
        // cy.get("input[type='checkbox']").check().should("be.checked")
        // cy.get("input[type='checkbox']").uncheck().should("not.be.checked")

        //selecting first checkboxes
        cy.get("input[type='checkbox']").first().check()
        cy.get("input[type='checkbox']").last().check()
    })
})
