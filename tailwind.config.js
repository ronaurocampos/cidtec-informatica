/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Procura as classes nos arquivos HTML da raiz
  theme: {
    extend: {
         backgroundImage: {
        'galaxy': "url('bggalaxy.jpg')",
      },
        textShadow: {
        default: '2px 2px 4px rgba(0,0,0,0.7)',
        md: '4px 4px 8px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}