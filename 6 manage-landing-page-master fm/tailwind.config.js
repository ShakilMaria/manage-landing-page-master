/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html, ./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'Primary_red': 'hsl(12, 88%, 59%)',
      'Primary_blue': 'hsl(228, 39%, 23%)',
      'Dark_Grayish_Blue': 'hsl(227, 12%, 61%)',
      'Very_Dark_Blue': 'hsl(233, 12%, 13%)',
      'Very_Pale_Red': 'hsl(13, 100%, 96%)',
      'Very_Light_Gray': 'hsl(0, 0%, 98%)',
    },
    fontFamily:{
      be_vietnam_pro : ["Be Vietnam Pro"]
    }
  },
  plugins: [],
}

