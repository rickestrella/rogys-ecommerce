/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#66766b',       // Fondo Principal
        'main-dark': '#21373b',  // Fondo Principal en Modo Oscuro
        'secondary': '#c3bbb3',  // Fondo Secundario (para el logotipo)
        'tertiary': '#f2f2f2',   // Fondo Terciario
        'action': '#ff4500',     // Color de Acción
        'beige': {
          '100': '#fdfdf7',
          '200': '#fbfbd9',
          '300': '#f9f9bb',
          '400': '#f7f79d',
          '500': '#f5f5dc', // Beige pálido que mencionamos antes
          '600': '#f3f3ae',
          '700': '#f1f190',
          '800': '#efef72',
          '900': '#eded54',
          '950': '#ebea36',
        },
      },
      textColor: {
        'primary': '#21373b',    // Texto Principal (cambiado de text-main)
        'secondary': '#4a4a4a',  // Texto Secundario
        'active': '#1e90ff',     // Color Activo
        'beige-light': '#f5f5dc',      // Color dorado pálido para texto claro
        'beige-medium': '#e3e3c3',    // Color dorado más claro
        'beige-dark': '#d0d0a8',   // Color dorado pálido para texto oscuro
        'beige-darker': '#dcdcb7',        // Beige más oscuro
        'beige-darkest': '#c0c09c',      // Beige más oscuro aún
        'main-dark-green': '#006400',
        'secondary-dark-green': '#004c00',
        'beige': {
          '100': '#fdfdf7',
          '200': '#fbfbd9',
          '300': '#f9f9bb',
          '400': '#f7f79d',
          '500': '#f5f5dc', // Beige pálido que mencionamos antes
          '600': '#f3f3ae',
          '700': '#f1f190',
          '800': '#efef72',
          '900': '#eded54',
          '950': '#ebea36',
        },    
      },
    },
  },
  plugins: [],
}