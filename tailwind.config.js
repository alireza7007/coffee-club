/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        "brown" : {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
      }
    },
    spacing : {
      "25" : "6.25rem",
      "30" : "7.5rem",
      "50" : "12.5rem"
    },
    boxShadow : {
      "normal" : "0px 1px 10px rgba(0, 0, 0, 0.5)",
      
    },
    borderRadius : {
      "4xl": "2rem"
    },
    fontFamily: {
      "sahel":"Sahel",
      "sahel-bold" : "Sahel bold",
      "sahel-black" : "Sahel black",
    },
    letterSpacing : {
      "tightest" : "-0.065em"
    },
    container : {
      center: true,
      padding : {
        DEFAULT : "1rem",
        lg : "0.625rem"
      }
    },
    backgroundImage : {
      "home-desktop" :  "url(./assets/headerBgDesktop.webp)",
      "home-mobile" :  "url(./assets/headerBgMobile.webp)"
    }
    },  
    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
 
    }
  },
  
  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
}],
}

