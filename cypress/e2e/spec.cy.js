describe("template spec", () => {
  it("Submitting an image", () => {
    cy.visit("/");

    cy.get("#title").type("test");

    cy.get("#imageUrl").type(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX-0p5rB_PI0B6oXnnUTkfCp_uZ1DBtcyYQ&s"
    );

    cy.get("#btnSubmit").click();
  });
});
