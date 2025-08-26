import { expect } from "chai"
export class AccountsDetailsPage{
    AccountsOption = '.is-expanded > .app-menu__item > .app-menu__label'
    AccountsDetailsOption = '.is-expanded > .treeview-menu > :nth-child(1) > .treeview-item'

    clickAccountsOption()
    {
        cy.get(this.AccountsOption).click()
        cy.wait(2000)
    }

    clickAccountsDetailsOption()
    {
        cy.get(this.AccountsDetailsOption).click()
        cy.wait(2000)
    }
}