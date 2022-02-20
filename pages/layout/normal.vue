<template>
  <div>
    <common-header :is-nav-light="isNavLight" />
    <slot />
    <common-footer />
  </div>
</template>

<script>
export default {
  name: "layout-normal",
  props: {
    isNavLight: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>

</style>
