
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //      "bridgeDesk": "url('./images/UnderBridgeDesk.jpg')",
      //      "bridgeTablet": "url('./images/UnderBridgeTablet.jpg')",
      //      "bridgePhone": "url('./images/UnderBridgePhone.jpg')",
      //   "sunsetDesk": "url('./images/sunsetDesk.png')",
      //   "sunsetTablet": "url('./images/sunsetTablet.svg')",
      //   "sunsetPhone": "url('./images/sunsetPhone.svg')",
     
      // }),
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