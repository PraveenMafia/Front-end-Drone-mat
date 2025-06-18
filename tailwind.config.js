// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
      theme: {
        extend: {
          backgroundImage: {
            ttuPattern: "url('/src/assets/bg-3-dark.png')",
          },
        },
      },
    plugins: [],
  }
  