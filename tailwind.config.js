/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'card-shadow':['0 7px 15px rgba(59, 130, 246, 1)']
      },
      backgroundImage:{
        "react-logo":"url('./src/assets/images/ReactLogo.png')",
        "Node-Logo":"url('./src/assets/images/nodelogo.png')",
        "Mongo-Logo":"url('./src/assets/images/Mongodblogo.png')",
        "Express-Logo":"url('./src/assets/images/expresslogo.png')",
        "Java-Logo":"url('./src/assets/images/Javalogo.png')"
      }
    },
  },
  plugins: [],
}

