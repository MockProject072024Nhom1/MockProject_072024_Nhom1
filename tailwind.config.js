import { dark } from '@mui/material/styles/createPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      pm: '368px',
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px'
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      colors: {
        primary: '#1C1B1B',
        secondary: '#C8C8C8',
        red: '#FF0000'
      }
    }
  }
};
