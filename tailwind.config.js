/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      roboto : ['Roboto'],
      newmono : ['"Xanh Mono"'],
      Yeseva:['"Yeseva One"'],

    },
    extend: {
      fontSize: {
        ultraxl: '100px'
      },
      keyframes: {
        movearound: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(100px)'},
          '50%': { transform: 'translate(100px, 100px)'},
          '75%': { transform: 'translateY(100px)'},
        },
        atasbawah: {
          '0%, 100%': { transform: 'translateY(50px)' },
          '50%': {transform: 'translateY(-50px)'},
        },
      },
      animation: {
        movearound: 'movearound 5s ease-in-out infinite',
        atasbawah: 'atasbawah 5s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
