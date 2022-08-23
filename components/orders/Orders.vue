<template>
<div class="pt-5">
  <div class="font-semibold text-2xl mt-[5px]">Accepted</div>
  <div class="py-10">


    <div v-if="orders.length > 0">
      <div v-for="order in orders" class="border rounded-md w-full p-5 flex flex-col">
        <table>
          <thead>
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 pl-0 pr-6 py-4 text-left">
              Order Number
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Date & Time
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Name
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Contact
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Trans Type
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 pl-6 pr-0 py-4 text-left">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="order in orders" class="font-bold">
            <td class="text-base text-gray-900 font-light pl-0 pr-6 py-4 whitespace-nowrap">
              {{ order.id }}
            </td>
            <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ order.date }}
            </td>
            <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ order.name }}
            </td>
            <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ order.contact }}
            </td>
            <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ order.transportation_type.toUpperCase() }}
            </td>
            <td class="text-base text-gray-900 font-light pl-6 pr-0 py-4 whitespace-nowrap">
              {{ order.total }}
            </td>
          </tr>
          </tbody>
        </table>
        <div class="flex flex-wrap" v-if="order.items && order.items.length > 0">
          <span class="text-lg">Order Items</span>
          <span v-for="item in order.items" class="px-3 py-1 bg-stone-200 mx-2 d-flex items-center rounded-lg">{{ item.menu.name }} x {{ item.quantity }}</span>
        </div>

        <div v-if="order.message && order.message !== ''">
          <div class="mt-4">
            Additional information from customer
          </div>
          <p class="font-bold">{{ order.message }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center my-10 text-xl font-bold">Nothing to show</div>
  </div>

</div>
</template>

<script>
export default {
  name: "Orders",
  data(){
    return{

    }
  },
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    }
  },
  methods:{

  },
}
</script>

<style scoped>

</style>
