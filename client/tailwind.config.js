const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f2f6fa",
                    100: "#55a6ff",
                    500: "#007aff",
                    600: "#0060ff",
                    700: "#4130ff",
                    900: "#0014ff",
                },
                neutral: {
                    50: "#F3F5F7",
                    100: "#E8ECEF",
                    500: "#6C7275",
                    600: "#343839",
                    700: "#232627",
                    900: "#141718",
                },
            },
        },
    },
    plugins: [],
};

export default config;
