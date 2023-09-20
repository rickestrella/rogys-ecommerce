<template>
  <section class="text-beige-600 body-font">
    <div
      class="container mx-auto flex px-5 py-0 items-center justify-center flex-col"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-scale-down object-center rounded"
        alt="hero"
        src="../assets/RB.svg"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 md:mb-8 font-medium text-beige-dark md:text-7xl"
        >
          ¡Bienvenido a Rogy's!
        </h1>
        <p class="mb-8 leading-relaxed text-justify text-beige-light text-[1.35rem]">
            Lugar donde los sueños dulces se hacen realidad. En Rogy's, nuestra
          pasión es hornear delicias irresistibles que deleitarán tus sentidos y
          endulzarán tu día. Desde exquisitos pasteles hasta suaves galletas y
          cupcakes tentadores, cada bocado es una obra maestra de sabor.
          Sumérgete en un mundo de sabores creativos y artesanía excepcional
          mientras exploras nuestro universo de repostería única. En Rogy's,
          cada creación es una celebración, y estamos listos para compartir ese
          espíritu festivo contigo. ¡Descubre el arte de la repostería en su
          máxima expresión en Rogy's!
        </p>
        <div class="flex justify-center">
          <router-link to="/products"
            class="inline-flex text-beige-300 bg-main-dark dark:bg-teal-900 border-0 py-3 px-8 focus:outline-none hover:bg-green-950 dark:hover:bg-teal-950 rounded text-xl shadow-lg hover:scale-95 transition-transform"
          >
            Nuestros productos
          </router-link>
          <a href="http://wa.me/593982524789" target="_blank"
            class="ml-4 inline-flex text-green-700 bg-beige-200 dark:bg-yellow-100 border-0 py-3 px-8 focus:outline-none hover:bg-beige-300 dark:hover:bg-beige-400 rounded text-xl shadow hover:scale-95 transition-transform"
          >
            ¡Cotiza aquí!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Index",
};
</script>