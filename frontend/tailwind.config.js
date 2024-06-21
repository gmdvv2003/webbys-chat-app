/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },

        extend: {
            animation: {
                "grow-shrink": "grow-shrink 0.3s ease forwards",
            },
            keyframes: {
                "grow-shrink": {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "100%": {
                        transform: "scale(1.1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
