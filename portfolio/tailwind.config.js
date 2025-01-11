/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html',
   "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
      screens: {
        laptop: '800px',
      },
    },
  },
  plugins: [],
}

