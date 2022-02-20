<template>
  <div>
    <common-header :is-nav-light="isNavLight" :is-logo-light="isLogoLight" />
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
    },
    isLogoLight: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>

</style>
