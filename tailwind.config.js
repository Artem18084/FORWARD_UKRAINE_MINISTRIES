
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0E2B6C',
        'myYellow':'#FFF200',
      },
      screens: {
        '3xl': '1600px', // Define your 3xl breakpoint
        '4xl': '1820px', // Define your 4xl breakpoint
        '5xl': '2100px',
      },
      
      opacityModal:{
        modalOpacity: "rgba(31,41,55,.5)"
      },
      boxShadow: {
        def: " 0px 8px 15px rgba(0, 0, 0, 0.1)",
        hov: "0px 15px 20px rgba(255,228,181, 0.4)",
        hovDonate: "0px 15px 20px rgba(200,200,200, 0.4)",

        hovBridge:"0px 15px 20px rgba(156,163,175,0.4)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};