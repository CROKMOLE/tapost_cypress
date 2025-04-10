import {navigationTo} from "../support/page_objects/navigationPage";

describe('template spec', () => {

    beforeEach('Open URL:', () => {
        cy.visit('https://tapost.fly.dev/')
    })


    it('passes', () => {
        navigationTo.formLayoutsPage()
        cy.contains('Sign in').click()

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .click()
            .parents('form')
            .find('[status="warning"]')
    })
    it('Clean code with Aliases and Callback function', () => {
        navigationTo.formLayoutsPage()
        cy.contains('Sign in').click()

        const email = cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputPassword2"]').should('contain', 'Password')

        const cardContainer = cy.contains('nb-card', 'Using the Grid')

        cy.contains('nb-card', 'Using the Grid')
        // cardContainer.find('[for="inputEmail1"]').should('contain', 'Email')
        // cardContainer.find('[for="inputPassword2"]').should('contain', 'Password')

        cy.contains('nb-card', 'Using the Grid').as('gridContainer')
        cy.get('@gridContainer').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.get('@gridContainer').find('[for="inputEmail1"]').should('contain', 'Email')

        cy.contains('nb-card', 'Using the Grid').then(usingGrid => {
            cy.wrap(usingGrid).find('[for="inputPassword2"]').should('contain', 'Password')
            cy.wrap(usingGrid).find('[for="inputEmail1"]').should('contain', 'Email')
        })
    })
    it('Extracting and Attribute values', () => {
        navigationTo.formLayoutsPage()

        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').then(value => {
            let extractedValue = value.text()
            expect(extractedValue).to.be.eq('Email address')
            expect(extractedValue).be.eq('Email address')

            //wrap example
            cy.wrap(value).should('contain', 'Email address')
        })
        //invoking
        cy.get('[for="exampleInputEmail1"]')
            .invoke('text')
            .should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(attribute => {
            expect(attribute).to.eq('label')
            cy.wrap(attribute).should('contain', 'label')
        })

        cy.get('#exampleInputEmail1').type('art@gmail.com')

        cy.get('#exampleInputEmail1')
            .invoke('prop', 'value')
            .should('contain', 'art@gmail.com')
    })

    it('Radio buttons', () => {
        navigationTo.formLayoutsPage()


        cy.contains('nb-card', 'Using the Grid').within(() => {
            cy.get('[type="radio"]').then(radioButtons => {
                cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
                cy.wrap(radioButtons).eq(1).check({force: true}).should('be.checked')
                cy.wrap(radioButtons).eq(0).should('not.be.checked')
            })
        })
    })
    it('Checkboxes', () => {
        navigationTo.toastRPage()

        // cy.contains('[for=""]')

        cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').uncheck({force: true})

        cy.get('[type="checkbox"]').eq(0).check({force: true}).should('be.checked')
        cy.get('[type="checkbox"]').eq(1).check({force: true})

        //bad approach
        cy.get('[type="checkbox"]').eq(1).click({force: true})
        cy.get('[type="checkbox"]').eq(1).click({force: true})
    })

    it('List and Dropdowns', () => {
        // cy.contains('Modal & Overlays').click()
        // cy.contains("Toastr").click()

        //one Specific
        // cy.get('nav nb-select').click()
        // cy.get('.option-list').contains('Dark').click()

        //how to iterate through all colar scheme
        cy.get('nav nb-select').then(dropDown => {
            cy.wrap(dropDown).click()
            cy.get('.option-list nb-option').each(element => {
                const itemText = element.text().trim()
                cy.wrap(element).click()
                cy.wrap(dropDown).should("contain", itemText)
                cy.log('info')
                cy.get('nav nb-select').click()
            })
        })
    })
    it('UI tables', () => {
        navigationTo.smartTablePage()
        const age = [20, 30, 40, 400]

        cy.wrap(age).each(age => {
            cy.get('input[placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(record => {
                if (age == 400) {
                    cy.wrap(record).should('contain', 'No data found')
                } else {
                    cy.wrap(record).find('td').eq(6).should("contain", age)
                }
                cy.get('tbody tr')
            })
        })
    })


})