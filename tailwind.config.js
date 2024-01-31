
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0E2B6C',
        'myYellow':'#FFF200',
        'mainBlue':'#4177ec',
        'hovDonate':'#FFF992',
        'hovSupport':'#5F95FF',
      },
      screens: {
       'my2xl':'1400px',
       'my1920':'1920px',
        'betweenMDLG':'900px',
      },
      
      opacity:{
        modalOpacity: "rgba(31,41,55,.5)",
        headerOpacity:"( rgba(14, 46, 117, 0.60)",


      },
      boxShadow: {
        cardShadow:'-2px 28px 68px 0px rgba(0, 0, 0, 0.05)',

        // def: " 0px 8px 15px rgba(0, 0, 0, 0.1)",
        // hov: "0px 15px 20px rgba(255,228,181, 0.4)",
        'shadowDonate': "0px 15px 20px rgba(95, 149, 255, 0.4)",
        'shadowSupport':"0px 15px 20px rgba(156,163,175,0.4)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};