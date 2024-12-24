import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fffdfa',
          100: '#ffe6a5',
          200: '#ffd36d',
          300: '#ffb432',
          400: '#ff9b0a',
          500: '#fc8100',
          600: '#cc5f02',
          700: '#a1490b',
          800: '#823e0c',
          900: '#461d04',
        },
      },
    },
  },
}
