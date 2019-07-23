<template>
  <button class="ml-button" :class="btnClass">
    <slot></slot>
  </button>
</template>

<script>
const prefix = "ml-button";
export default {
  name: "MlButton",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return [
        `${prefix}--${this.type}`,
        this.disabled ? `${prefix}--disabled` : "",
        this.round ? `${prefix}--round` : ""
      ];
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables/index";
.ml-button {
  color: white;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 5px;
  &:focus {
    cursor: pointer;
  }
  &--primary {
    background-color: $color-primary;
  }
  &--disabled {
    background-color: $color_disabled;
    color: rgba(255, 255, 255, 0.8);
  }
  &--round {
    border-radius: 20px;
  }
}
</style>
