module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 8s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        boxShadow: {
          'glow': '0 0 15px rgba(79, 70, 229, 0.5)',
        },
        colors: {
          dark: {
            100: '#1a1a1a',
            200: '#141414',
            300: '#0a0a0a',
          },
        },
      },
    },
    plugins: [],
  }