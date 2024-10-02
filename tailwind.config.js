/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
      "./*.html",
      "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    fontFamily: {
      roboto : ['Roboto'],
      newmono : ['"Xanh Mono"'],
      Yeseva:['"Yeseva One"'],
      montserrat:['Montserrat']
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
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': {transform: 'translateY(100px)'},
        },
      },
      animation: {
        movearound: 'movearound 5s ease-in-out infinite',
        atasbawah: 'atasbawah 5s ease-in-out infinite',
      },
      backdropBlur: {
        soBlurry: '200px',
      },
      colors: {
        Primer: '#3D3F3C',
        Sekunder: '#FF6000',
        Tersier: '#50524F',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('flowbite/plugin'),
  ],
}
