/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,

        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1100px',

        },
      },
      colors: {
        orange: "hsl(22, 65%, 57%)",
        almostBlack: " hsl(0, 0%, 6%, 0.955)",
        lightGray: "hsl(0, 0%, 95%)",
        verylightGray: "rgba(255,255,255,0.5)",
        peach: "hsl(21, 94%, 75%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        gray: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [

  ]
}

