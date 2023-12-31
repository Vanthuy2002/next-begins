/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['Manrope'],
      },
      colors: {
        grayF4: '#f4f4f4',
        grayFC: '#fcfcfc',
        primary: '#11142d',
      },
    },
  },
  plugins: [],
};
