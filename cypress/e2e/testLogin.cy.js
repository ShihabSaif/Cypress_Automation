describe("TP Portal login", () => {
  it("logs in successfully", () => {
    cy.login()
    cy.contains("Welcome to TallyPay Portal") // sanity check
  })
})