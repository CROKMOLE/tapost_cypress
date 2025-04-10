export class NavigationPage {

    formLayoutsPage() {
        cy.contains('Forms').click()
        cy.contains("Form Layouts").click()
    }

    smartTablePage() {
        cy.contains('Tables & Data').click()
        cy.contains("Smart Table").click()

    }
    toastRPage() {
        cy.contains('Modal & Overlays').click()
        cy.contains("Toastr").click()
    }
}
export const navigationTo = new NavigationPage()