/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Custom font definitions
        sans: ['Roboto', 'Arial', 'sans-serif'], // Google Font with fallbacks
        serif: ['Merriweather', 'serif'], // Another example
        custom: ['YourCustomFont', 'sans-serif'], // Self-hosted or custom font
        roboto: ['Roboto', 'sans-serif'],
        amazon: ['"Amazon Ember"', 'Arial', 'sans-serif'],
      },
      colors: {
        amazon: {
          orange: '#FF9900',
          black: '#111111',
          blue: '#146EB4',
          yellow: '#FFB300',
          gray: '#767676',
        },
      },
    },
  },
  plugins: [],
}
