import { expect } from "chai"
export class AccountsDetailsPage{
    AccountsOption = '.is-expanded > .app-menu__item > .app-menu__label'
    AccountsDetailsOption = '.is-expanded > .treeview-menu > :nth-child(1) > .treeview-item'

    clickAccountsOption()
    {
        cy.contains('span.app-menu__label', 'Accounts').click()
        cy.wait(2000)
    }

    clickAccountsDetailsOption()
    {
        cy.contains('a.treeview-item', 'Accounts Detail').click()
        cy.wait(2000)
    }

    walletInput()
    {
        cy.get('input[type="text"]').first().type('01621215877');
        cy.wait(2000)
    }
    submitButton()
    {
        cy.contains('button', 'Search').click();
        cy.wait(2000)
    }
}