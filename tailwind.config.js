/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,js,ts}'],
  theme: {
    screens: {
      'sm': {'max':'480px'},
      'md': {'min':'480px','max':'768px'},
      'lg': {'min': '768px','max' : '1024px'},
      'xl': {'min': '1024px','max' : '1280px'},
      'zl': {'min': '1280px','max' : '1520px'},
    }
  },
  plugins: [],
}

