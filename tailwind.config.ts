import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans Variable"', 'sans-serif'],
      },
      colors: {
        primary: '#017FD2',
        secondary: '#FBBF24',
        accent: '#4F46E5',
      },
    }, 
  },
  plugins: [
    forms,
    typography,
  ],
};

export default config;