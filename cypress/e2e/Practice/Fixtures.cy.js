describe('My Test Suites', () => {

    // //Direct Access
    // it('FixturesDemoTest', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com")
    //     cy.get("input[placeholder='Username']").type("Admin")
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").click()
    //     cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', "PIM")
    // })
   

    //Access through Hook -for multiple blocks 
    let userdata;
    before( ()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;
        })
    })

    it('FixturesDemoTestWithData', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.fixture('orangehrm').then((data) => {
            cy.get("input[placeholder='username']").type(data.username)
            cy.get("input[placeholder='password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected);
        })
    })
  
})