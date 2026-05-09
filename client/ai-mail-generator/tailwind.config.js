/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                },
                 dark: {
                    900: '#0a0f1e',  // almost black with blue tint
                    800: '#0d1426',  // dark navy
                    700: '#111827',  // dark blue-gray
                    600: '#1a2744',  // navy
                }
            },
        },
    },
    plugins: [],
}