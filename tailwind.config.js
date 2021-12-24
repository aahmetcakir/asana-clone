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
        projectCardHover: "#F8F7F7",
        "inverse-background-hover": "rgba(255, 255, 255, 0.06)",
      },
      spacing: {
        18: "72px",
        30: "120px",
        110: "440px",
        183: "732px",
        210: "840px",
      },
      borderRadius: {
        "2.5xl": "20px",
        "4xl": "30px",
      },
      fontFamily: {
        sans: [
          '"apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Helvetica","Arial","sans-serif"',
        ],
      },
      transitionProperty: {
        display: "flex, inline, hidden, block, inline-block",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      width: ["focus"],
      display: ["group-hover", "hover"],
      margin: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
