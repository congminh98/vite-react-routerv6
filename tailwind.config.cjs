/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {}
    },
    fontFamily: {
      vibes: 'Great Vibes, cursive',
      rubik: 'Rubik Bubbles, cursive'
    },
    extend: {
      colors: {
        before: 'rgba(47, 54, 64, .5)',
        after: 'transparent #fff transparent #fff'
      },
      borderWidth: theme => ({
        'w-100': '100px',
        'w-50vw': '50vw'
      }),
      minWidth: theme => ({
        '3/2': '150px'
      }),
      screens: theme => ({
        md: { max: '767px' },
        lg: { max: '1366px' }
      }),
      backgroundImage: {
        invitation: "url('assets/images/invitation.jpeg')",
        loading: "url('/loading.gif')"
      },
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  },
  plugins: [],
  safelist: [
    { pattern: /(bg|text|border|from|to)-./ }
  ]
};
