export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yap-yellow':  '#F5C800',
        'yap-red':     '#B81C24',
        'yap-green':   '#1B6E3A',
        'yap-dark':    '#1C0A00',
        'yap-light':   '#F7F0E3',
        'yap-text':    '#1E1008',
        'yap-muted':   '#6B5744',
        'yap-border':  '#DDD0B8',
        'yap-gold':    '#C9960C',
      },
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans:  ['Noto Serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
