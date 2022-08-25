<template>
<!--menü seçme checkbox tasarımı-->
  <VSelect :options="menu" label="name" multiple @input="onSelectChange">
    <template slot="option" slot-scope="option" >
      <div class="h-[48px] w-full flex items-center">
        <div class="min-w-[36px]">
          <input v-if="isSelected(option)" checked type="checkbox" class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer">
          <input v-else type="checkbox" class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer">
        </div>
        <div class="text-xl">
          {{ option.name }}
        </div>
      </div>
    </template>
  </VSelect>
</template>

<!--checkbox yardımıyla sipariş oluşturma-->
<script>
import Vue from 'vue'
import 'vue-select/dist/vue-select.css';
import VSelect from 'vue-select'

export default {
  name: "MenuSelectComponent",
  components: { VSelect },
  data(){
    return {
      current_selection: null
    }
  },
  computed: {
    menu() {
      return this.$store.getters.getMenu.list;
    },
    create_order_state() {
      return this.$store.getters.getCreateOrderState;
    }
  },
  methods:{
    onSelectChange(values) {
      this.create_order_state.map(order => {
        const o = values.find(v => order.menu.id === v.id);
        if (o) {
          this.$store.dispatch('removeOrder', o.id);
        }
      });
      values.map(menu => {
        const order = this.create_order_state.find(o => o.menu.id === menu.id);
        if (!order) {
          this.$store.dispatch('createOrder', menu);
        }
      });
    },
    addToMenu() {

    },
    isSelected(menu) {
      return this.create_order_state && !!this.create_order_state.find(o => o.menu.id === menu.id)
    }
  },
}
</script>

<style>
  .vs__dropdown-option--selected {
    background-color: #DBEAF8 !important;
  }
</style>
