<template>
  <div class="flex flex-wrap">
    <div
      v-for="product in products"
      :key="product.id"
      class="lg:w-1/4 md:w-1/2 p-4 w-full"
    >
      <router-link :to="'/products/' + product.id">
        <a class="block relative h-48 rounded overflow-hidden">
          <!-- w-full h-full -->
          <img
            :alt="product.name"
            class="object-cover object-center block w-[420px] h-[260px] max-w-[420px] max-h-[260px]"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div class="mt-4">
          <h3
            class="text-beige-500 text-xs tracking-widest title-font mb-1 uppercase"
          >
            Categoría: {{ product.category }}
          </h3>
          <h2 class="text-beige-600 title-font text-lg font-medium">
            {{ product.name }}
          </h2>
          <p class="mt-1 text-beige-200">{{ product.price }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: ["products"],
};
</script>