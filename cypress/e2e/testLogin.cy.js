describe("TP Portal login", () => {
  it("logs in successfully", () => {
    cy.login()
    cy.visit("/") // optional - dashboard landing
    cy.contains("Welcome to TallyPay Portal") // sanity check
  })
})