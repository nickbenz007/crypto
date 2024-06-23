/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: "Jost sans-serif",
        IBM: "IBM Plex Mono",
      },
      colors: {
        light: "#ACA9EC",
        darker: "#533E97",
        darker1: "#533E97",
        lemon: "#41FF96",
      },
      backgroundImage: {
        "radial-gradient-custom":
          "radial-gradient(50% 50% at 50% 50%, rgba(172, 169, 236, 0.5) 0%, rgba(83, 62, 151, 0.255) 50%, rgba(83, 62, 151, 0) 100%)",
      },
    },
  },
  plugins: [],
};
