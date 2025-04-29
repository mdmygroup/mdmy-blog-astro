/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#4338ca',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#4f46e5',
              '&:hover': {
                color: '#4338ca',
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
};