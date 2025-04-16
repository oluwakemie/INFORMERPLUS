//before
//after
//beforeEach
//afterEach

describe('TestSuites', ()=>{

before(()=>{
    cy.log("xxxxxxxxx launching app xxxxxxxxxx")
})
after(()=>{
    cy.log("xxxxxxxxx close app xxxxxxxxxx")
})
beforeEach(()=>{
    cy.log("xxxxxxxxx login xxxxxxxxxx")
})
afterEach(()=>{
    cy.log("xxxxxxxxx logout xxxxxxxxxx")
})

    it('search', ()=>{
        cy.log("xxxxxxxxx searching xxxxxxxxxx")

    })
    it('advanced search', ()=>{
        cy.log("xxxxxxxxx advance searching xxxxxxxxxx") 
    })
    it('listing products', ()=>{
        cy.log("xxxxxxxxx listing products xxxxxxxxxx")
    })
})