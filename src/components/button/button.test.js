import { mount } from "@vue/test-utils";
import KlkButton from "./button.vue";

describe("KlkButton", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(KlkButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

test("renders correctly", () => {
  const wrapper = mount(KlkButton);
  expect(wrapper.element).toMatchSnapshot();
});
