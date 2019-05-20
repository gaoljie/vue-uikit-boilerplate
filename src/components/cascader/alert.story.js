import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import KlkButton from "./button.vue";
import { action } from "@storybook/addon-actions";

storiesOf("Button", module).add("component", () => ({
  template: '<klk-button @click="buttonClick">Click</klk-button>',
  components: {
    KlkButton
  },
  methods: {
    buttonClick: action("click")
  }
}));
