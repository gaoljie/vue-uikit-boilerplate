<template>
  <button class="klk-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "KlkBtn"
};
</script>

<style lang="scss">
  .klk-btn {
    background: $color_primary;
  }

</style>