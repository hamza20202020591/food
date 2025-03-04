/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            'raleway': ['Raleway', 'sans-serif'],
            'playfair-display': ['Playfair Display', 'serif'],
            'josefin-sans': ['Josefin Sans', 'sans-serif'],
          },
          colors: {
            'primary': '#1E3A8A', // Dark Blue
            'secondary': '#3B82F6', // Light Blue
            'accent': '#4CAF50', // Green
            'neutral': '#1A202C', // Dark Gray/Black
            'light': '#F7FAFC', // Light Gray
            'header': '#2D3748', // Darker Gray for Header
            'footer': '#2D3748', // Darker Gray for Footer
          },
        },
      },
      plugins: [],
    }
