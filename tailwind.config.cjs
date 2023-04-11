const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter'
  ],

  theme: {
    extend: {
      muse: {
        primary: '#517451',
        secondary: '#465036',
        accent: '#F1DC97',
        neutral: '#1D1523',
        'base-100': '#465036',
        info: '#5AABF6',
        success: '#32C873',
        warning: '#8E570B',
        error: '#F7856E'
      }
    }
  },

  plugins: [require('daisyui')]
};

module.exports = config;
