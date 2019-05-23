<template>
  <button class="klk-alert">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "KlkBtn"
};
</script>
<style lang="scss">
  .klk-alert {
    background: $color_blue;
  }


</style>