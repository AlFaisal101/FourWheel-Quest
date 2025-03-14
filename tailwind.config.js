/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths based on your project structure
    theme: {
      container: {
        center: true,  // Centers the container by default
        padding: "1rem",  // Adds padding inside the container
      },
      extend: {},
    },
    plugins: [],
  };
  