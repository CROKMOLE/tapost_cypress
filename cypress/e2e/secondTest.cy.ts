import {navigationTo} from "../support/page_objects/navigationPage";
import {onFormLayoutPage} from "../support/page_objects/formLayoutsPage";

describe('Tapost: test', () => {
    beforeEach('Open Tapost Angular app home page', () => {
        cy.visit('https://tapost.fly.dev/')

    })
    it('Submit online form with name and email', () => {
        navigationTo.formLayoutsPage()
        cy.fixture('userData.json').as('userData')
        cy.get('@userData').then(data => {
            onFormLayoutPage.submitInLineFormWithNameAndEmail(data.fullName, data.email)


        })
        onFormLayoutPage.submitInLineFormWithNameAndEmail(Cypress.env('fullName'), Cypress.env('email'))
        // cy.get('#input')

    })
})