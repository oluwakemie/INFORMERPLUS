///<reference types ="cypress"/>

///<reference types ="cypress-xpath"/>

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})
 
//customer command for clicking on link using label

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})

Cypress.Commands.add('mockGeoAndVisit', (url) => {
    cy.visit(url, {
      onBeforeLoad: (win) => {
        const latitude = 37.7749;
        const longitude = -122.4194;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition')
          .callsFake((cb) => {
            cb({ coords: { latitude, longitude, accuracy: 100 } });
          });
      }
    });
  });


