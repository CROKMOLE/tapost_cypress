export class FormLayoutsPage {
    submitInLineFormWithNameAndEmail(fullName: string, email: string) {
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(fullName)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutPage = new FormLayoutsPage()