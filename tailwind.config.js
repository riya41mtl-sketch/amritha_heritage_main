/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // --- Core Heritage Neutrals (for backgrounds and subtle elements) ---
        'heritage-bg-primary': '#FBF9F6',
        'heritage-bg-secondary': '#F5F0E6',
        'heritage-bg-tertiary': '#EDE8DA',
        'heritage-bg-accent': '#DCD7C9',

        // --- Text Colors ---
        'text-primary-title': '#3A4A3E',
        'text-secondary-title': '#607C6E',
        'text-description': '#5D5C50',
        'text-description-2': '#313f35',
        'text-description-3': '#435547',
        'text-more-description': '#7C7B6F',

        // --- Border Colors ---
        'border-soft': '#D9D3C1',
        'border-accent': '#A09782',

        // --- Button Colors ---
        'button-primary-bg': '#7A6B5C',
        'button-primary-text': '#FBF9F6',
        'button-primary-hover-bg': '#5C4E42',
        'button-primary-hover-text': '#FBF9F6',
        'button-secondary-bg': 'transparent',
        'button-secondary-border': '#7A6B5C',
        'button-secondary-text': '#7A6B5C',
        'button-secondary-hover-bg': '#F5F0E6',
        'button-secondary-hover-border': '#5C4E42',
        'button-secondary-hover-text': '#5C4E42',
        'button-accent-bg': '#B07B5F',
        'button-accent-text': '#FBF9F6',
        'button-accent-hover-bg': '#9C6A50',
        'button-accent-hover-text': '#FBF9F6',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
