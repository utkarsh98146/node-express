/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", // Include your React files
    "./node_modules/flowbite/**/*.js",
    // flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Add the Flowbite plugin
  ],
};
