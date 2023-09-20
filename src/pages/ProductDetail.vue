<template>
  <div v-if="product">
    <section class="text-beige-100 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            :alt="product.name"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px]"
            src="https://dummyimage.com/400x400"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-beige-100 tracking-widest">
              {{ product.category }}
            </h2>
            <h1 class="text-beige-200 text-3xl title-font font-medium mb-1">
              {{ product.name }}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-teal-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-teal-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-teal-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-teal-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-teal-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <span class="text-beige-200 ml-3">4 Valoraciones</span>
              </span>
            </div>
            <p class="leading-relaxed">
              {{ product.description }}
            </p>
            <div
              class="flex mt-6 items-center pb-5 border-b-2 border-beige-100 mb-5"
            />
            <div class="flex">
              <span class="title-font font-medium text-2xl text-beige-300">{{
                product.price
              }}</span>
              <button
                class="flex ml-auto text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded shadow-md"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <not-found />
  </div>
</template>
  
<script>
import { products } from "../temp-data";
import NotFound from "./NotFound.vue";

export default {
  name: "ProductDetail",
  components: {
    NotFound,
  },
  data() {
    let productId = parseInt(this.$route.params.productId);
    return {
      product: products.find((product) => product.id === productId),
    };
  },
};
</script>