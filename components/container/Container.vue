<template>
  <div class="pl-9 pt-9">
    <div>
      <img src="../../assets/icons/toggle-icon.svg" alt="toggle" @click="toggle">
    </div>
    <slot />
  </div>
</template>

<script>


export default {
  name: "Container",
  data() {
    return {
    }
  },
  methods: {
    toggle() {
      this.$store.commit('changeOrderInformationState', this.$store.getters.getOrderInformationState)
    }
  },
}
</script>

<style scoped>

</style>
