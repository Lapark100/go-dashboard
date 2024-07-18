/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0D6EFD',
        bgColor: '#F0F2F5',
        linkColor: '#647995',
        sideBarColor: '#94A3B8',
        sideHover: '#F0F6FE',
        userSubColor: '#98A2B3',
        deleteColor: '##667185',

      },
      spacing:{
        '96': '24rem', // example of extending spacing scale
        '128': '32rem', // example of adding custom spacing value
        '144': '36rem', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
