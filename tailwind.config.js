/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/img/james-barr-lf8nwCdrx00-unsplash.jpg')",
        'meeting-prayer': "url('/img/amaury-gutierrez-rzmQOng8h8I-unsplash.jpg')",
        'meeting-friday': "url('/img/jon-tyson--0o9dgxEu5Q-unsplash.jpg')",
        'meeting-sunday': "url('/img/pexels-luis-quintero-2774551.jpg')",
        'sermons-hero': "url('/img/pexels-pixabay-267559.png')",
        'history-bg': "url('/img/tom-barrett-2t60-JYQ5pk-unsplash.png')",
      },
      colors: {
        'white': '#ffffff',
        'purple': '#5C2861',
        'gold': '#E4A829'
      },
      container: {
        center: true,
      },
    }
  },
  plugins: [],
}
