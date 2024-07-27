/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-slate-900', 'bg-blue-100', 'bg-slate-800', 'bg-blue-200',
    'bg-slate-700', 'bg-blue-300', 'bg-slate-600', 'bg-blue-400',
    'text-slate-200', 'text-blue-900', 'disabled:bg-slate-700',
    'disabled:bg-blue-300', 'hover:bg-slate-600', 'hover:bg-blue-400'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}