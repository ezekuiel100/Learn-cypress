import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
