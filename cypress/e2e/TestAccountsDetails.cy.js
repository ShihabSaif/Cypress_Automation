import { AccountsDetailsPage } from "../page/AccountsDetailsPage";

const accountsDetailspage = new AccountsDetailsPage()

it('Naviagating Accounts Details Section', function(){
    accountsDetailspage.clickAccountsOption()
    accountsDetailspage.clickAccountsDetailsOption()
})