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
      rubik: 'Rubik, cursive',
      rowdies: 'Rowdies, cursive',
      nunito: 'Nunito, sans-serif',
      playBall: 'Playball, cursive',
      quickSand: 'Quicksand, sans-serif',
      SVNEvitrian: 'SVNEvitrian, cursive'
    },
    extend: {
      colors: {
        before: 'rgba(47, 54, 64, .8)',
        before2: '#fff transparent transparent',
        beforemd: 'rgba(47, 54, 64, .85)',
        after: 'transparent rgb(253 224 71) transparent rgb(253 224 71)',
        after2: 'transparent transparent #fff',
        after3: 'transparent transparent transparent #fff',
        colorBlue: '#487eb0',
        colorPink: '#ff4061',
        bg2: 'rgba(255,255, 255,0.7)'
      },
      boxShadow: {
        button: '0 0 0 2px #fff inset, 0 0 0 2px #ff4061'
      },
      screens: _theme => ({
        md: { max: '767px' },
        lg: { min: '1366px' }
      }),
      backgroundImage: {
        anhcuoi: "url('assets/images/anhcuoi.jpeg')",
        loading: "url('/loading.gif')",
        invitation: "url('assets/images/invitation.jpeg')",
        leaf: "url('assets/images/leaf.svg')",
        flower: "url('assets/images/flower-medium.svg')",
        whiteArrow: "url('assets/images/white-arrow.svg')",
        whiteArrowReverse: "url('assets/images/white-arrow-reverse.svg')"
      },
      animation: {
        text: 'text 5s ease infinite',
        fold: 'fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards',
        unfold: 'unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards'
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
        },
        fold: {
          '0%': {
            transform: 'rotateX(0deg)'
          },
          '100%': {
            transform: 'rotateX(-180deg)'
          }
        },
        unfold: {
          '0%': {
            transform: 'rotateX(180deg)'
          },
          '100%': {
            transform: 'rotateX(0deg)'
          }
        }
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|from|to|rotate|origin|z|scale|m(t|r|b|l))-./
    }
  ]
};
