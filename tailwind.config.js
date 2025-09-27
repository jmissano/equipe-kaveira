/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- garante que todos os arquivos src são escaneados
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
