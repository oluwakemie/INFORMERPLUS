describe('Handle Tables', (() =>{

    beforeEach('Login',()=>{
       
        cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
        cy.contains("email").parent().find('input').type('oluwakemi.dada@sproxil.com');
        cy.get('input[name="password"]').type('Abc1234$*');
        cy.get('.inline-flex').click()

        //Users --> 
         cy.get('a[href="/pages/user"]').click() // users page
         cy.get('.font-semibold').should('be.visible')
         cy.get('.text-muted-foreground > .flex').type("Souvik Samantha")
         cy.contains('button', 'Search').click()
    })
    it('Check Number Rows & Column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10') //Assertion: finds total number of rows.
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6') // finds total number of columns.
    })
    it('Check Cell data from specific Rows & Columns', ()=>{
        
    })
    it('Read all the rows and colums data in the first page', ()=>{
        
    })
    it('Pagination', ()=>{
        
  })
 }))