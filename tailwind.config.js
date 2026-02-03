// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
    darkMode: 'class', // یا 'media'
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('dark', '&:where(.dark, .dark *)');    }
  ],
}
