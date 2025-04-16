import '@4tw/cypress-drag-drop';
import 'cypress-iframe';

describe("Mouse Operation", () =>{


it('MouseHover', () => {
    
    cy.visit('https://group.jumia.com/')
    cy.get("body > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").should('not.be.visible')
    cy.get('.menu > :nth-child(1) > .block').trigger('mouseover').click();

    cy.get('.page').should('be.visible')

});

it('Right click', () => {
    cy.visit('https://uitestingplayground.com/home')
    cy.get("a[href='/dynamicid']").trigger(':nth-child(1) > :nth-child(3) > h3 > a').click
   // cy.get("div[class='container'] h3").should('be.visible')
   //GET BACK TO THIS

});

it('Double click', () => {
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded("#iframeResult") //Load the frame

    //Approach1 trigger()
    // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
    // cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!');

    //Approach2 dblclick()
    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
    cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!');
});

it('Drag and Drop using plugin', () => {
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    cy.get('#box5').drag('#box101', {force:true})

});


//INDIA FLAG
it.only('Scrolling Page', () => {
    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
    cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:4000});
    cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

    cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:4000});
    cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')
    cy.get('#footer').scrollIntoView();
});
})
