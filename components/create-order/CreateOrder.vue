<template>
  <div class="pt-5">
    <div class="font-semibold text-2xl mt-[5px]">Create Orders</div>
    <form class="grid grid-cols-2 divide-x" @submit="submit">
      <div class="pr-5 pt-4 flex flex-col">
        <label class="block font-semibold text-base mt-[15px]">Order Number: <span class="font-bold text-lg">#{{ this.order_id }}</span></label>
        <label class="block font-semibold text-base mt-[10px]">Date & Time: <span class="font-bold">{{ this.date ? this.date.toLocaleDateString() : '' }} at {{ this.date ? this.date.toLocaleTimeString('tr-TR') : '' }}</span></label>
        <label class="block font-semibold text-base mt-[15px]">Name</label>
        <input v-model="form.name" type="text" required class="border border-[#CCCCCC] w-full h-[35px] px-5 text-lg font-semibold mt-[10px] rounded display-[block] padding-[8px]" />
        <label class="block font-semibold text-base mt-[15px]">Contact</label>
        <VuePhoneNumberInput default-country-code="TR" v-model="form.contact" required />

        <label class="block font-semibold font-size:23px w-[120px] h-[27px] mt-[20px] text-xl">Trans Type</label>

        <section class="inline font-semibold">
          <input v-model="form.transportation_type" type="radio" name="transportation_type"  id="delivery" class="mt-[20px]" value="delivery">
          <label class="" for="delivery">Delivery</label>

          <input v-model="form.transportation_type" type="radio" id="takeaway" class="ml-20" value="takeaway">
          <label class="w-[80px] h-[23px]"  for="takeaway">Takeaway</label>
        </section>

        <label class="block font-semibold font-size:18px w-[151px] h-[21px] mt-[20px] text-l">Message to client</label>
        <textarea class="border border-[#CCCCCC] w-full mt-[10px] box border rounded text-lg font-semibold p-5" rows="5"> </textarea>

        <label class="block font-semibold font-size:18px h-[21px] mt-[20px] mb-[10px] text-l">Order Items</label>

        <MenuSelectComponent />
        <OrderStatusList />
            </div>
      <div class="px-5">
        <div class=" w-full rounded-md bg-[#F6F6F6] py-5">
          <OrderSummary />
            </div>
        <div class="w-full rounded-md bg-[#F6F6F6] py-5 mt-10  text-xl">
          <table class="min-w-full">
            <tbody>
              <tr>
                <td class="text-black px-6 py-4 whitespace-nowrap text-lg font-semibold">
                  Order Amount
                </td>
                <td class="text-black font-bold px-6 py-4 whitespace-nowrap text-xl">
                  {{ totalAmount }}$
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        <div class="mt-10 text-right">
          <button type="submit" class="inline font-semibold text-xl w-[200px] h-[40px] bg-[#2A71FA] rounded text-white">Add Order</button>
          </div>
      </div>


    </form>


  </div>

</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import MenuSelectComponent from "../MenuSelectComponent/MenuSelectComponent";
import OrderStatusList from "../OrderStatusList/OrderStatusList";
import OrderSummary from "../OrderSummary/OrderSummary";

export default {
  name: "CreateOrder",
  components: {OrderSummary, OrderStatusList, MenuSelectComponent, VuePhoneNumberInput },
  data(){
    return{
      order:{
        order:"",
        canvas:null,
      },
      picked: null,
      orders:null,
      order_id: (Math.random() * 1000000).toFixed(0),
      date: new Date(),
      form: {
        name: '',
        contact: '',
        transportation_type: '',
        message: ''
      }
    }
  },
  computed: {
      cart() {
        return this.orders.filter(order => order.quantity > 0);
      },
      totalQuantity() {
        return 0;
      },
      menu() {
        return this.$store.getters.getMenu.list;
      },
      create_order_state() {
        return this.$store.getters.getCreateOrderState;
      },
      totalAmount() {
        let sum = 0;
        this.$store.getters.getCreateOrderState.map(o => {
          sum += (o.quantity * o.menu.price)
        })
        return sum;
      }
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
            items: this.create_order_state,
            total: this.totalAmount
          };

          this.$store.dispatch('insertOrder', order);

          this.$router.push('/');
    },
    updateCart(order, updateType) {
      for (let i = 0; i < this.orders.length; i++) {
        if (this.orders[i].id === order.id) {
          if (updateType === 'subtract') {
            if (this.orders[i].quantity !== 0) {
              this.orders[i].quantity--;
            }
          } else {
            this.orders[i].quantity++;
          }

          break;
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
