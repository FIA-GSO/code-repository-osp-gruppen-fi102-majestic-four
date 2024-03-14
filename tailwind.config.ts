import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                "scale-down": {
                    "0%": { transform: "scaleX(1)" },
                    "100%": { transform: "scaleX(0)" },
                },
            },
        },
    },
    daisyui: {
        themes: [
            {
                gso: {
                    primary: "#5b9ad5",
                    secondary: "#242323",
                    accent: "#f97316",
                    neutral: "#6b7280",
                    "base-100": "#ffffff",
                    info: "#0f5fd9",
                    success: "#34d399",
                    warning: "#fdba74",
                    error: "#f43f5e",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
export default config;
