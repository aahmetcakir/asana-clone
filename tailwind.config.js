module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "secondary": "#f9f8f8",
        "text-weak" : "#6d6e6f",
        "purple" : "#726ab9",
        "dark-purple" : "#575089",
        "link" : "#4573d2",
      },
      spacing: {
        '110': '440px',
        '183': '732px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}