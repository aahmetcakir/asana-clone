module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#f9f8f8",
        "text-weak": "#6d6e6f",
        purple: "#726ab9",
        "dark-purple": "#575089",
        link: "#4573d2",
        dark: "#1e1f21",
        "inverse-text": "#f5f4f3",
        selectedMenu: "#ffffff29",
        selectedMenuHover: "#ffffff14",
        buttonCreation: "#f06a6a",
        upSell: "#E8B668",
        borderStrong: "#cfcbcb",
      },
      spacing: {
        18: "72px",
        110: "440px",
        183: "732px",
      },
    },
  },
  variants: {
    extend: {
      width: ["focus"],
    },
  },
  plugins: [],
};
