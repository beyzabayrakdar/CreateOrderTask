import menu from '../assets/model/menu.json'
export const state = () => ({
  isOrderInformationOpen: false,
  meals: menu,
  create_order_state: [],
  orders: []
})
// {
//   menu: {
//     id: "0000",
//     name: "Lorem",
//     price: 10.99
//   },
//   quantity: 1
// }

export const getters = {
  getOrderInformationState(state) {
    return state.isOrderInformationOpen
  },
  getMenu(state){
    return state.meals
  },
  getCreateOrderState(state) {
    return state.create_order_state;
  },
  getOrders(state) {
    return state.orders;
  }
}

export const mutations = {
  changeOrderInformationState(state, isOpen) {
    state.isOrderInformationOpen = !isOpen;
  },
  increaseOrderQuantity(state, id) {
    const order = state.create_order_state.find(o => o.menu.id === id);
    if (order) {
      order.quantity++;
    }
  },
  decreaseOrderQuantity(state, id) {
    const order = state.create_order_state.find(o => o.menu.id === id);
    if (order) {
      order.quantity--;
    }
  },
  createOrder(state, menu) {
    state.create_order_state.push({
      menu: menu,
      quantity: 1
    });
  },
  removeOrder(state, id) {
    state.create_order_state = state.create_order_state.filter(o => o.menu.id !== id);
  },
  clearOrderItems(state) {
      state.create_order_state = [];
  },
  insertOrder(state, order) {
    state.orders.push(order);
  }
}

export const actions = {
  async exampleAction(state) {

  },
  increaseOrderQuantity({ commit }, id) {
    commit('increaseOrderQuantity', id);
  },
  decreaseOrderQuantity({ commit }, id) {
    commit('decreaseOrderQuantity', id);
  },
  createOrder({ commit }, menu) {
    commit('createOrder', menu);
  },
  removeOrder({ commit }, id) {
    commit('removeOrder', id);
  },
  insertOrder({commit}, order) {
    commit('insertOrder', order);
    commit('clearOrderItems');
  }
}
