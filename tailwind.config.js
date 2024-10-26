// tailwind.config.js
export default {
  content: [
    './src/views/**/*.{ejs,html}', // Adjust this to match the location of the EJS or HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ["Ubuntu", 'serif'],
      }
    },
  },
  plugins: [],
};
