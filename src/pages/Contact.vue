<template>
  <section class="text-beige-600 body-font relative w-full z-10">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        id="mapIframe"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;ll=-0.139497,-78.469640&amp;markers=label:Rogys%7C-0.139497,-78.469648ie=UTF8&amp;t=&amp;z=16&amp;output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    
    <!-- Form -->
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-beige-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border-2 border-gray-200"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Sugerencias
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Estaremos gustosos de poder mejorar para ti y brindarte la mejor
          experiencia
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Mensaje</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg"
        >
          Enviar
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Recuerda que los mensajes son revisados por humanos. Este proceso puede tardar dependiendo de la cantidad de mensajes recibidos.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    const mapIframe = document.getElementById("mapIframe");
    
    mapIframe.addEventListener("mouseover", () => {
      mapIframe.style.transition = "filter 0.75s";
    //   mapIframe.style.filter = "none";
    mapIframe.style.filter = "grayscale(0) contrast(1) opacity(0.7)";
    });

    mapIframe.addEventListener("mouseout", () => {
      mapIframe.style.transition = "filter 0.5s";
      mapIframe.style.filter = "grayscale(0.5) contrast(1.2) opacity(0.4)";
    });
  },
};
</script>