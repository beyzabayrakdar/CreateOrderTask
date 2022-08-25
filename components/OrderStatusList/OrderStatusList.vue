<template>
<!--checkbox'ta seçilen ürünlerin miktarını arttırıp azaltma ve ürünleri sepetten çıkarma işlemleri-->
  <div>
    <div v-for="item in create_order_state" class="flex items-center text-lg py-6 pl-4 border-bottom">
      <span class="flex-1">{{ item.menu.name }}</span>
      <span class="shrink-0 px-8">{{ item.menu.price * item.quantity }}</span>
      <div class="shrink-0 border border-sky-500 h-full rounded-md flex">
        <button type="button" class="bg-transparent border-transparent p-0 text-gray-500 shrink-0 px-2" @click="decreaseOrderQuantity(item)">-</button>
        <span class="px-5 text-center">{{ item.quantity }}</span>
        <button type="button" class="bg-transparent border-transparent p-0 flex-1 px-2" @click="increaseOrderQuantity(item)">+</button>
      </div>
      <button type="button" class="bg-transparent border-transparent px-8 text-gray-500 shrink-0" @click="removeOrder(item)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderStatusList",
  computed: {
    create_order_state() {
      return this.$store.getters.getCreateOrderState;
    }
  },
  methods: {
    increaseOrderQuantity(order) {
      this.$store.dispatch('increaseOrderQuantity', order.menu.id);
    },
    decreaseOrderQuantity(order) {
      if (order.quantity < 2) return;
      this.$store.dispatch('decreaseOrderQuantity', order.menu.id);
    },
    removeOrder(order) {
      this.$store.dispatch('removeOrder', order.menu.id);
    }
  }
}
</script>

<style scoped>

</style>
