<template>
  <header class="text-beige-600 body-font z-40 bg-main dark:bg-main-dark shadow-md">
    <div
      class="mx-auto flex flex-wrap py-0 px-5 flex-col md:flex-row items-center"
    >
      <div
        class="title-font font-medium items-center text-gray-900 mb-0 w-fit flex"
      >
        <router-link to="/">
          <img src="../assets/rogys_logo.png" alt="logo" class="w-full h-[5rem]" />
        </router-link>
      </div>

      <nav class="flex flex-wrap items-center text-base justify-end">
        <router-link
          to="/products"
          class="mr-5 text-beige-dark hover:text-beige-700 text-lg font-semibold"
          >Productos</router-link
        >
        <router-link
          to="/contact"
          class="mr-5 text-beige-dark hover:text-beige-700 text-lg font-semibold"
          >Contacto</router-link
        >
        <router-link
          to="/cart"
          class="mr-5 text-beige-dark hover:text-beige-700 text-lg font-semibold"
          >Carrito</router-link
        >
      </nav>
    </div>
  </header>
</template>
  
  <script>
export default {
  name: "Navbar",
};
</script>