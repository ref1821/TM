/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        horizon: ['Horizon', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dblue: '#032661',
        dorange: '#f56e00',
        lblue: '#83aff7',
        lorange: '#f68127',
        cream: '#fdf0d5',
        mblue: '#054bdd',
    },
  },
  plugins: [],
}
}