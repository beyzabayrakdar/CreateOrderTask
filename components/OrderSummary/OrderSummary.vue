<template>
<!--Delivery Details kısmı, verilen siparişler listeleniyor-->
  <div>
    <label class="block ml-[20px] text-lg font-semibold">Delivery Details</label>
    <table class="min-w-full" v-if="create_order_state.length > 0">
      <thead class="border-b">
      <tr>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Order Item
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Number
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Cost
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="order in create_order_state" class="border-b font-bold">
          <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ order.menu.name }}
          </td>
          <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ order.quantity }}
          </td>
          <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ order.quantity * order.menu.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="text-center my-10 text-xl">No Order Found</div>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  computed: {
    create_order_state() {
      return this.$store.getters.getCreateOrderState;
    }
  },
}
</script>

<style scoped>

</style>
