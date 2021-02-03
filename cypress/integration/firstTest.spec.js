/// <reference types="Cypress" />



// it('By ID', () =>{
// cy.visit("http://www.facebook.com/")
// cy.get("#email")
// })

// it('By ID', () =>{
//     cy.visit("http://www.facebook.com/")
//     cy.get("#email")
//     });

// it('By Class', () =>{
//     cy.visit("https://docs.cypress.io/api/commands/document.html#Syntax")
//     cy.get(".ds-input")
//     });

// it('By Class', () =>{
//     cy.visit("https://docs.cypress.io/api/commands/document.html#Syntax")
//     cy.get("nav")
//     });

// it('By Tag value', () =>{
//     cy.visit("http://www.facebook.com/")
//     cy.get('[name="pass"]')
//     });

// it.only('By Tag value', () =>{
//     cy.visit("http://www.facebook.com/")
//     cy.get('[role="button"][data-testid="open-registration-form-button"]')
//     });

// it.only('By Different Types', () =>{
//     cy.visit("https://docs.cypress.io/api/commands/document.html#Syntax")
//     cy.get('a[id="collapse-sidebar"][href="#"]')
//     });

// Comment

it('Using Get with Find and Eq', () =>{
     cy.visit("https://next.privat24.ua/deposit/open")
     cy.get('tbody').find('tr').find('td').find('button').eq(0)
     });

it.only('Using Get with Find and Eq', () =>{
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax")
    cy.get('aside').find('li').find('a').find('span').eq(0)
    });
