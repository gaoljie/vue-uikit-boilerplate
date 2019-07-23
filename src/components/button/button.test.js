import { shallowMount } from "@vue/test-utils";
import MlButton from "./button.vue";

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MlButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("positive color", () => {
    const wrapper = shallowMount(MlButton, {
      propsData: {
        type: "positive"
      }
    });
    expect(wrapper.classes("ml-button--positive")).toBeTruthy();
  });
});
