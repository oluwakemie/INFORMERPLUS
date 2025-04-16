describe('TestSuite', () => {

    beforeEach(() => {
        cy.visit('https://staging.d3kyieg1vzkpho.amplifyapp.com/', {
            onBeforeLoad(win) {
                cy.stub(win.navigator.geolocation, 'getCurrentPosition')
                    .callsFake((cb) => {
                        return cb({
                            coords: {
                                latitude: 37.7749,  // Mock latitude
                                longitude: -122.4194 // Mock longitude
                            }
                        });
                    });
            }
        });
    });

    it('DataDrivenTest', () => {

        cy.fixture("orangehrm2").then((data) => {



            cy.get("img[class='w-[120px]']").should('be.visible')

            cy.get('.font-extrabold.text-xl').should('have.text', 'Welcome back! ')
            cy.get('.text-xs').should('have.text', "Great to have you. Happy Tracking")

            cy.get(':nth-child(1) > .font-medium').should('have.text', 'Email')

            data.forEach((userdata) => {
                cy.get('input[placeholder="johndoe@gmail.com"]').clear().type(userdata.username)
                cy.get('input[type="password"]').clear().type(userdata.password)
                cy.get("button[type='submit']").click()

                if (userdata.username == 'Oluwakemi.dada@sproxil.com' && userdata.password == 'Abc1234$*') {
                    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").should('have.text', userdata.expected);
                    cy.get("svg[type='button']").click();
                    cy.get('.inline-flex > .flex').click();
                }
                else {
                    cy.get("div[class='text-sm font-semibold [&+div]:text-xs']").should('exist', userdata.expected)
                   
                }







                // data.forEach((userdata)=>{
                //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
                // cy.get("input[placeholder='password']").type(userdata.password)
                // cy.get("button[type='submit']").click()

                // // if(userdata.username=='Admin' && userdata.password=='admin123')
                // // {
                // //     cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected);
                // //     cy.get('.oxd-userdropdown-tab > .oxd-icon').click() //logout
                // //     cy.get('.oxd-topbar-header-title').click() //logout
                // // }
                // // else
                // // {
                // //     cy.get('.oxd-alert-content.oxd-alert-content--error').should('have.text', userdata.expected)
                // // }

            })

        })
    })
})

// beforeEach(() => {
//     cy.visit('https://staging.d3kyieg1vzkpho.amplifyapp.com/', {
//       onBeforeLoad(win) {
//         cy.stub(win.navigator.geolocation, 'getCurrentPosition')
//           .callsFake((cb) => {
//             return cb({
//               coords: {
//                 latitude: 37.7749,  // Mock latitude
//                 longitude: -122.4194 // Mock longitude
//               }
//             });
//           });
//       }
//     });
//   });