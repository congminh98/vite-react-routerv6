/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {},
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    },
    fontFamily: {
      vibes: 'Great Vibes, cursive',
      rubik: 'Rubik Bubbles, cursive',
      rowdies: 'Rowdies, cursive'
    },
    extend: {
      colors: {
        before: 'rgba(47, 54, 64, .6)',
        beforemd: 'rgba(47, 54, 64, .85)',
        after: 'transparent rgb(253 224 71) transparent rgb(253 224 71)',
        'text-user': '#73777b'
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
