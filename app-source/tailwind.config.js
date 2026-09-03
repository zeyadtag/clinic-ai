/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F2F7F5',
        base: '#071820',
        paper: '#0D242D',
        line: '#1C3A42',
        primary: {
          DEFAULT: '#1FB899',
          light: '#103D3A',
          dark: '#69E1C8'
        },
        accent: {
          DEFAULT: '#D7B46A',
          light: '#3B3325'
        },
        success: '#2F855A',
        warning: '#B7791F',
        danger: '#C0392B'
      },
      fontFamily: {
        display: ['"Tajawal"', 'system-ui', 'sans-serif'],
        sans: ['"Tajawal"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        card: '16px',
        pill: '999px'
      }
    }
  },
  plugins: []
}
