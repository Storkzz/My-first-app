/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        body: "#212529",
        bar: "#e9ecef",
        topbar: "#dee2e6",
        primary: "#0d6efd",
        secondary: "#6c757d",
      },
    },
  },
  plugins: [],
};
