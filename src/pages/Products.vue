<template>
  <section class="text-gray-600 body-font h-full">
    <div class="container px-5 mx-auto">
      <ProductsList :products="products" />
    </div>
  </section>
</template>
  
  <script>
import ProductsList from "../components/ProductsList.vue";
import { products } from "../temp-data";
import axios from 'axios';

export default {
  name: "Products",
  data() {
    return {
      products,
    };
  },
  components: {
    ProductsList,
  },
  async created() {
    axios.get('')
  }
};
</script>