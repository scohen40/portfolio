import type { Config } from 'tailwindcss'
// /** @type {import('tailwindcss').Config} */

const config: Config = {
// module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config
