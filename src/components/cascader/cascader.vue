<template>
  <button class="klk-cascader">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "KlkBtn"
};
</script>
<style lang="scss">
  .klk-cascader {
    background: $color_blue;
  }

</style>