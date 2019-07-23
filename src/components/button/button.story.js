import { storiesOf } from "@storybook/vue";
import MlButton from "./button.vue";
import markdown from "./button.md";
storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { MlButton },
    template: `<div>
<ml-button type="primary">Primary</ml-button>
<ml-button disabled>Disabled</ml-button>
<ml-button round>Round</ml-button>
</div>`
  }),
  {
    notes: { markdown: markdown }
  }
);
