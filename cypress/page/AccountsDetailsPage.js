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
        cy.get('input[type="text"]').first().type('01621215877');
    }
    submitButton()
    {
        cy.contains('button', 'Search').click();
    }
    txnInfoDetailsButton()
    {
        cy.contains('a', 'Txn Info').click();
    }
    walletInformationClick()
    {
        cy.get('i.fas.fa-external-link-alt').parent().click()
    }
}