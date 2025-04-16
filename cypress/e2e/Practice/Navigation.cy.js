// go()
describe('mySuites',()=>{

    it('NavigationTest',()=>{
        cy.visit('https://paylodeservices.com/')
        cy.title().should('eq',"Paylode")

        cy.get('[href="/pricing"] > .cursor-pointer').click();
        cy.get("h2[class='text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3']").should('have.text','Frequently Asked Questions')

        cy.go('back') //back to home
        cy.title().should('eq',"Paylode")

        cy.go('forward') //price page 
        cy.get("h2[class='text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3']").should('have.text','Frequently Asked Questions')

        
        cy.title().should('eq',"Paylode")
        cy.get("h2[class='text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3']").should('have.text','Frequently Asked Questions')

        cy.go(-1) // home
        cy.title().should('eq',"Paylode")

        cy.go(1) //price page
        cy.get("h2[class='text-[1.7rem] lg:text-[2.5rem] font-extrabold text-center text-gray-600 tracking-wide mb-3']").should('have.text','Frequently Asked Questions')
        cy.reload()
    })
})