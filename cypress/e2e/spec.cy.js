const elements = {
  title: "#title",
  imageUrl: "#imageUrl",
  btnSubmit: "#btnSubmit",
  titleFeedback: "#titleFeedback",
  urlFeedback: "#urlFeedback",
};

const imageLink =
  "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg";

const checkIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`;

describe("Image Registration", () => {
  after(() => {
    cy.clearAllLocalStorage();
  });

  describe("Submitting an image with invalid inputs", () => {
    it("Given I am on the image registration page", () => {
      cy.visit("/");
    });

    it("When I enter '' in the title field", () => {
      cy.get(elements.title);
    });

    it("Then I enter '' in the URL field", () => {
      cy.get(elements.imageUrl);
    });

    it("Then I click the submit button", () => {
      cy.get(elements.btnSubmit).click();
    });

    it("Then I should see 'Please type a title for the image' message above the title field", () => {
      cy.get(elements.titleFeedback).contains(
        "Please type a title for the image"
      );
    });

    it("And I should see 'Please type a valid URL' message above the imageUrl field", () => {
      cy.get(elements.urlFeedback).contains("Please type a valid URL");
    });
  });

  describe("Submitting an image with valid inputs using enter key", () => {
    it("Given I am on the image registration page", () => {
      cy.visit("/");
    });

    it("When I enter 'Alien BR' in the title field", () => {
      cy.get(elements.title).type("Alien BR");
    });

    it("Then I can hit enter to submit the form", () => {
      cy.get(elements.btnSubmit).type("{enter}");
    });

    it("Then I should see a check icon in the title field", () => {
      cy.get(elements.title).should("have.css", "background-image", checkIcon);
    });

    it(`When I enter ${imageLink} in the URL field`, () => {
      cy.get(elements.imageUrl).type(imageLink);
    });

    it("Then I should see a check icon in the imageUrl field", () => {
      cy.get(elements.title).should("have.css", "background-image", checkIcon);
    });

    it("Then I can hit enter to submit the form", () => {
      cy.get(elements.btnSubmit).type("{enter}");
    });

    it("And the list of registered images should be updated with the new item", () => {
      cy.get("#card-list  img").last().should("have.attr", "src", imageLink);
    });

    it("And the new item should be stored in the localStorage", () => {
      cy.getAllLocalStorage().then((ls) => {
        const currentyLs = ls[window.location.origin];
        const elements = JSON.parse(Object.values(currentyLs));
        const lastElement = elements[elements.length - 1];

        expect(lastElement).to.deep.equal({
          title: "Alien BR",
          imageUrl: imageLink,
        });
      });
    });
  });
});
