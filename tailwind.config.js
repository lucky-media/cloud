module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./content/**/*.md",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        fontSize: {
            xs: ["12px", "16px"],
            sm: ["14px", "18px"],
            base: ["16px", "20px"],
            lg: ["18px", "22px"],
            xl: ["20px", "25px"],
            "2xl": ["24px", "32px"],
            "3xl": ["30px", "36px"],
            "4xl": ["36px", "45px"],
            "5xl": ["40px", "54px"],
            "6xl": ["48px", "60px"],
        },
        extend: {
            fontFamily: {
                sans: "Mulish",
            },
            colors: {
                gray: {
                    100: "#F9F9F9",
                    200: "#EFEFEF",
                    300: "#E9E9E9",
                    400: "#F6F4F9",
                    500: "#71717A",
                    600: "#52525B",
                    700: "#3F3F46",
                    800: "#27272A",
                    900: "#18181B",
                },
                green: {
                    100: "#e2efe7",
                    200: "#d3e7db",
                    300: "#c4dfcf",
                    400: "#b6d7c3",
                    500: "#a7cfb6",
                    600: "#98c7aa",
                    700: "#89bf9e",
                    800: "#7bb792",
                    900: "#6CAF86",
                },
                bluegray: {
                    300: "#4B5D68",
                },
                indigo: {
                    900: "#212353",
                    800: "#373964",
                    700: "#4D4F75",
                    600: "#646587",
                    500: "#7A7B98",
                    400: "#9091A9",
                    300: "#A6A7BA",
                    200: "#BCBDCB",
                    100: "#D3D3DD",
                },
                purple: {
                    500: "#9058df",
                },
                pink: {
                    100: "#FDE8F5",
                    500: "#F063B8",
                },
            },
            boxShadow: {
                xs: "0px 5px 5px rgba(75, 93, 104, 0.1)",
                "3xl": "10px 40px 50px rgba(229, 233, 246, 0.4)",
                "4xl": "0px 0px 0px 2px #D4D4D8",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),

        // eslint-disable-next-line no-undef
        require("tailwindcss-debug-screens"),
    ],
};
