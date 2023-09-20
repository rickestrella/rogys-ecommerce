<template>
  <div v-if="cartItems.length > 0">
    <div v-for="product in cartItems" :key="product.id">
      <div class="rounded p-12">
        {{ product.name }}
        <h3>
          {{ product.price }}
        </h3>
        <button>Remove</button>
      </div>
    </div>
    <button>Checkout</button>
  </div>
  <div v-else>
    <p class="text-gray-600">No items added yet!</p>
  </div>
</template>
  
  <script>
import { cartItems } from "../temp-data";

export default {
  name: "ShoppingCart",
  data() {
    return {
      cartItems,
    };
  },
};
</script>