const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      selector: {
        base: 'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
        active:
          'bg-cyan-700 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
        disabled: 'cursor-not-allowed opacity-50',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
