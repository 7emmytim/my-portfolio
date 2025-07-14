/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    25: "#ececff",
                    50: "#c5c5f6",
                    100: "#9d9ded",
                    200: "#7676e6",
                    300: "#5454D4", // main shade (500)
                    400: "#3e3eb3",
                    500: "#2e2e93",
                    600: "#202072",
                    700: "#141452",
                    800: "#0a0a32",
                },
                bg: 'var(--color-bg)',
                primary: 'var(--color-primary)',
            },
        },
    },
    plugins: [],
};
