import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: "390px",
        mobi2: "575px",
        tablet: "640px", // @media (min-width: 640px)
        laptop: "990px", // @media (min-width: 1024px)
        desktop: "1280px", // @media (min-width: 1280px)
      },
    },
  },
  plugins: [],
};
export default config
