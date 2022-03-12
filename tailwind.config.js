module.exports = {
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      body: ['IBM Plex Mono', 'monospace'],
    },
  },
};
