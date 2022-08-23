<template>
    <div>
        <div class="border-[1.5px] border-[#CCCCCC] box-border h-150 w-70 rounded-md mt-[30px]">
            <div class="border-solid col-span-{6} divide-x text-xl text-gray-600 font-semibold h-[20px] mt-[25px]">
                <label class="ml-[55px]">Order number: </label>
                <label class="ml-[150px]">Date & Time: </label>
                <label class="ml-[150px]">Name</label>
                <label class="ml-[150px]">Contact</label>
                <label class="ml-[150px]">Trans Type</label>
                <label class="ml-[100px]">Amount</label>
            </div>

            <div class="border-solid col-span-{6} divide-x text-xl font-semibold mb-[25px] mt-[25px]">
                <label class="ml-[80px]"><span class="font-bold text-lg">#{{ this.order_id }}</span></label>
                <label class="ml-[145px]"><span class="font-bold">{{ this.date ? this.date.toLocaleDateString() : '' }} at {{ this.date ? this.date.toLocaleTimeString('tr-TR') : '' }}</span></label>
                <label class="ml-[60px]"><span class="font-bold text-lg">#{{ this.name }}</span></label>
                <label class="ml-[60px]"><span class="font-bold text-lg">#{{ this.contact }}</span></label>
                <label class="ml-[115px] bg-[#2A71FA] text-white w-[180px] h-[45px] rounded-md"><span class="font-bold text-lg">#{{ this.form.transportation_type }}</span></label>
                <label class="ml-[125px]">{{ totalAmount }}$</label>
            </div>

            <div class="border-solid col-span-{4} divide-x text-xl font-semibold mb-[40px] mt-[40px]">
                <label class="ml-[55px] text-gray-600">Ordered Items</label>
                <label class="ml-[35px] border-[1px] border-[#CCCCCC] rounded-md h-[45px] bg-[#EBEBEB]">Paneer Tikka Masala X 1</label>
                <label class="ml-[35px] border-[1px] border-[#CCCCCC] rounded-md h-[45px] bg-[#EBEBEB]">Tawa butter roti X 4</label>
                <label class="ml-[35px] border-[1px] border-[#CCCCCC] rounded-md h-[45px] bg-[#EBEBEB]">Papad X 2</label>
            </div>

            <div class="border-solid col-span-{2}">
                <div class="mb-[25px] ml-[55px] font-semibold text-xl">
                <label class="block text-gray-600">Additional information from customer</label>
                <label class="">Please send salad and green chantni with 2 dish.</label>

                <button class="inline font-semibold text-xl w-[180px] h-[45px] ml-[670px] bg-[#2A71FA] rounded-md text-white">Move to Cooking</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CreateOrderVue from '../create-order/CreateOrder.vue';

export default {
  name: "OrderList",
  components: {CreateOrderVue},
  data(){
    return{
      
    }
  },
  computed: {
      
    },
  methods:{
      submit(e){
          e.preventDefault();
          const order = {
            id: this.order_id,
            date: this.date,
            name: this.form.name,
            contact: this.form.contact,
            transportation_type: this.form.transportation_type,
            message: this.form.message,
            items: this.create_order_state
          };

          this.$store.dispatch('insertOrder', order);
      
          this.$router.push('/');
    },
  },
}
</script>