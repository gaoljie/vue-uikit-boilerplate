import { configure } from "@storybook/vue";

function loadStories() {
  require("../src/components/button/button.story.js");
}

configure(loadStories, module);
