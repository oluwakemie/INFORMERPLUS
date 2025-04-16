describe('Suites',()=>{

    it('Capture Screenshots and Videos',()=>{
        cy.visit("https://paylodeservices.com/")
       /* cy.screenshot("WebPage")
        cy.wait(5000)  
        cy.get('.w-20').screenshot("logo")
      */
        //Automatically capture screenshot & video on failure - only when execute through CLI
        cy.get('[href="/pricing"] > .cursor-pointer').click();
        cy.get('.py-\[48px\].relative > .text-\[1\.7rem\]').should('have.text', 'Frequently Asked Questions')
    })

})