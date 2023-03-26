/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d279e0",
        
"secondary": "#0b9339",
        
"accent": "#6ffc99",
        
"neutral": "#141F24",
        
"base-100": "#F4EBF4",
        
"info": "#46A7CE",
        
"success": "#179648",
        
"warning": "#E5B010",
        
"error": "#FB3235",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
