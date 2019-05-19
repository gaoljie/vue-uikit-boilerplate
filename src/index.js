import * as components from "./entry";
const install = function(Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const plugin = {
  install
};

export * from "./entry";

export default plugin;
