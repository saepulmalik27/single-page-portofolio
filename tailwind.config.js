/** @type {import('tailwindcss').Config} */


const colors = require("./src/config/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: colors,
      width : {
        'desktop' : '1440px',
        'main': '1110px',
      },
      maxWidth : {
        'desktop' : '1440px',
        'main': '1110px',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
        addComponents({
          '.heading-lg' : {
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "normal",
          },
          '.heading-md' : {
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "normal",
          },
          '.heading-sm' : {
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "normal",
          },
          '.heading-xs' : {
            fontSize: "26px",
            fontWeight: "700",
            lineHeight: "normal",
            
          }
        })
    })
  ],
}
