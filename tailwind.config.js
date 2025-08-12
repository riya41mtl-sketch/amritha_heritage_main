/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-heading': ['Playfair Display', 'serif'],
        'serif-subheading': ['Cormorant Garamond', 'serif'],
        'sans-body': ['Lora', 'sans-serif'],
      },
      colors: {
        'heritage-ivory': '#FDFDF6', // Main background - like aged paper
        'heritage-sandstone': '#EAE0D5', // Secondary background
        'heritage-ochre': '#C6AC8F', // Accent, borders, details
        'heritage-terracotta': '#B07B5F', // Accent buttons, highlights
        'heritage-green': '#3A4A3E', // Main text, dark elements
        'heritage-blue': '#2C3E50', // Royal blue for specific accents
        'heritage-maroon': '#6D2E46', // Deep maroon for highlights
        'heritage-gold': '#D4AF37', // Gold foil accents
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
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
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
