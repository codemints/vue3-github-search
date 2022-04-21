module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{scss,html,js,ts,vue,jsx,tsx}'
  ],
  theme: {
    colors: {
      'clr-base': '#0079ff',
      'clr-dark-100': '#ffffff',
      'clr-dark-600': '#1e2a47',
      'clr-dark-800': '#141d2f',
      'clr-light-100': '#fefefe',
      'clr-light-200': '#f6f8ff',
      'clr-light-400': '#697c9a',
      'clr-light-600': '#4b6a9b',
      'clr-light-800': '#2b3442',
      'clr-warn': '#f74646',
    },
    extend: {
      fontSize: {
        'icon': '2.4rem',
        'icon-sm': '2rem',
      }
    },
  },
  plugins: [],
}
