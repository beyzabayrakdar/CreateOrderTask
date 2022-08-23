<template>
  <div class=" bg-[#F6F6F6] h-[1300px] font-semibold " :class="{'hidden':this.$store.getters.getOrderInformationState}">
    
  <div class="text-3xl mt-[30px] ml-[30px]">Orders</div>
  
  <form class="w-[309px]">
    <label class="block mt-[40px] ml-[30px]">New Order</label>
    <label class="block mt-[30px] ml-[30px]">Accepted</label>
    <label class="block mt-[30px] ml-[30px]">Cooking</label>
    <label class="block mt-[30px] ml-[30px]">Parcel Ready</label>
    <label class="block mt-[30px] ml-[30px]">Delivered</label>
    <label class="block mt-[30px] ml-[30px]">Completed</label>
  </form>


  </div>
</template>

<script>
export default {
  name: "OrderInformation",
}
</script>

<style scoped>

</style>
