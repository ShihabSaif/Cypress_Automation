import { expect } from "chai"
export class AccountsDetailsPage{

    clickAccountsOption()
    {
        cy.contains('span.app-menu__label', 'Accounts').click()
    }

    clickAccountsDetailsOption()
    {
        cy.contains('a.treeview-item', 'Accounts Detail').click()
    }

    walletInput()
    {
        cy.get('input[type="text"]').first().type("01765841854");
    }
    submitButton()
    {
        cy.contains('button', 'Search').click();
    }
    txnInfoDetailsButton()
    {
        cy.contains('a', 'Txn Info').click();
    }
    txnTypeDropdown()
    {
        cy.get('select.form-control:not(.form-control-sm)').eq(0)
        .select('CASH_IN_FROM_CARD')
        .should('have.value', 'CASH_IN_FROM_CARD')
    }
    walletInformationClick()
    {
        cy.get('i.fas.fa-external-link-alt').parent().click()
    }
}