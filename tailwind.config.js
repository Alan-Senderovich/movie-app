/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans 3', 'sans-serif'],
        'sourceSansPro': ['SourceSansPro-Regular', 'sans-serif'], 
      },
      colors: {
        lightBlue: "#01b4e4",
        darkBlue: "#032541",
      },
    },
  },
  plugins: [],
};
