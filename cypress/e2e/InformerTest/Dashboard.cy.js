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

    // it(' Valid LoginTest', () => {
    //    // cy.visit("https://staging.d3kyieg1vzkpho.amplifyapp.com/")
    //     cy.mockGeoAndVisit("https://staging.d3kyieg1vzkpho.amplifyapp.com/");
    //     const ln = new Login
    //     ln.setUsername("oluwakemi.dada@sproxil.com")
    //     ln.setPassword("Abc1234$*")
    //     ln.clickSubmit()
    //     ln.verifyLogin()
    // })
    it('verify account email, logout button and notification', ()=>{
           cy.get(".lucide.lucide-bell.relative.cursor-pointer").click()
           cy.get("button[class='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'] svg").click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should('have.text', ' oluwakemi.dada@sproxil.com')
    })

    it('should verify dashboard total counts', () => {
        // Verify total SGTINs Encoded
        cy.get("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-fit w-fit !text-[rgba(120,0,0,255)] mb-6']").click()
        cy.get(':nth-child(2) > .rounded-xl > .p-6 > :nth-child(1) > .w-full')
            .should('have.text', 'Total SGTINs Encoded')
        cy.get('.p-6 > :nth-child(1) > .flex').should('be.visible')
            .and('contain', '24')

        // Verify total SSCC Encoded
        cy.get(".p-6 > :nth-child(2) > .w-full")
            .should('have.text', 'Total SSCC Encoded')
        cy.get(':nth-child(2) > .rounded-xl > .p-6 > :nth-child(2) > .flex').should('be.visible')
            .and('contain', '182994')

        // Verify total Items Commissioned
        cy.get('.p-6 > :nth-child(3) > .w-full')
            .should('have.text', 'Total Item Commissioned')
        cy.get('.p-6 > :nth-child(3) > .flex').should('be.visible')
            .and('contain', '189')


        cy.get('.absolute > .lucide').click()

        // Verify total Items Decommissioned
        cy.get('.p-6 > :nth-child(4) > .w-full')
            .should('have.text', 'Total Item Decommissioned')
        cy.get('.p-6 > :nth-child(4) > .flex').and('contain', '33')


        cy.get(':nth-child(5) > .w-full')
            .should('have.text', 'Total Item Packed')
        cy.get('.p-6 > :nth-child(5) > .flex').and('contain', '43')


        cy.get(':nth-child(6) > .w-full')
            .should('have.text', 'Total Item Shipped')
        cy.get('.p-6 > :nth-child(6) > .flex').and('contain', '30')

        cy.get('.absolute > .lucide').dblclick()

        cy.get(':nth-child(7) > .w-full')
            .should('have.text','Total Item Received')
        cy.get('.p-6 > :nth-child(7) > .flex').and('contain', '25')

        cy.get(':nth-child(8) > .w-full')
            .should('have.text','Total Item Unpacked')
        cy.get('.p-6 > :nth-child(8) > .flex').and('contain', '57')
    })

    it.only('should test Items Commissioned table', () => {
        //cy.get('#radix-\:ra\:-trigger-commissioned').contains('Items Commissioned').click()
        cy.get("h3[class='font-semibold leading-none tracking-tight my-[10px]']").should('be.visible');

        //Select1
        cy.get('.css-1jqq78o-placeholder#react-select-2-placeholder')
          .click({force:true})
          .wait(5000)
        cy.contains('Testman Sproxil').click({force:true})
        //   .type('{downArrow}{downArrow}{downArrow}')
        //   .click({force:true})


        //Select2
        cy.get('.css-1jqq78o-placeholder#react-select-3-placeholder')
          .click({force:true})
          .wait(5000)
        cy.get('#react-select-3-option-0').click({force:true}); 

        cy.get('.w-52 > .css-13cymwt-control > .css-hlgwow > .css-19bb58m')
        .click({force:true}).wait(2000)
        cy.get('#react-select-4-option-1').click()

        // Input date range
        cy.get("input[name='start-date']").type('2023-01-01')
        cy.get("input[name='end-date']").type('2025-12-31')

        //Click search
        cy.get("button[class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-secondary active:scale-[0.98] h-9 px-4 py-2']")
        .contains('Search').click()
        // Verify table headers 
    
        cy.get('table thead')
            .should('contain', 'Product Name')
            .and('contain', 'Client Name')
            .and('contain', 'Label-Type')
            .and('contain', 'Volume')
            .and('contain', 'Date')

        
        //check numbers of rows and columns
        cy.get(".w-full.caption-bottom.text-sm>tbody>tr").should('have.length', '5')
        cy.get(".w-full.caption-bottom.text-sm>thead>tr>th").should('have.length', '5')


    //     // Check specific row details
    //    cy.get('table tbody tr').first().within(() => {
    //     cy.get('.\[\&_tr\:last-child\]\:border-0 > :nth-child(5) > :nth-child(1)').contains('pqr pain cure 500g');
       
       
        //Read all the Rows and Columns in the first page
        cy.get("table[class$='w-full caption-bottom text-sm']>tbody>tr").each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());

                })
            })
            cy.get('.w-full > .mt-4').should('have.text', 'A list of all label commissioned.')
            cy.get("p[class=' text-primary text-[11px] font-extrabold']").should('have.text', 'Copyright © 2025')
        })

 //})
    // it('should test search functionality', () => {
    //     // Select dropdowns
    //     cy.get('select').first().select('Option1')
    //     cy.get('select').eq(1).select('Option2')
    //     cy.get('select').eq(2).select('LabelType1')

      

    //     // Verify search results
    //     cy.get('table tbody tr').should('have.length.gte', 0)
    // })
    // it('should handle no data scenarios', () => {
    //     // Test with extreme date range
    //     cy.get('input[placeholder="Start-Date"]').type('2030-01-01')
    //     cy.get('input[placeholder="End-Date"]').type('2040-12-31')
    //     cy.get('button').contains('Search').click()

    //     // Verify no results message
    //     cy.get('table tbody')
    //         .should('exist')
    //         .and('contain.text', 'No data available')
    // })

    // it("login and logout", () => {
    //     cy.contains("Logout")
    //     // cy.contains("oluwakemi.dada@sproxil.com")
    // });
});
});


