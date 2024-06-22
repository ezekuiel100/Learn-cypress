describe("Image Registration", () => {
  describe("Submitting an image with invalid inputs", () => {
    it("Given I am on the image registration page", () => {
      cy.visit("/");
    });

    it("When I enter '' in the title field", () => {
      cy.get("#title");
    });

    it("Then I enter '' in the URL field", () => {
      cy.get("#imageUrl");
    });

    it("Then I click the submit button", () => {
      cy.get("#btnSubmit").click();
    });

    it("Then I should see 'Please type a title for the image' message above the title field", () => {
      cy.get("#titleFeedback").contains("Please type a title for the image");
    });

    it("And I should see 'Please type a valid URL' message above the imageUrl field", () => {
      cy.get("#urlFeedback").contains("Please type a valid URL");
    });
  });
});
