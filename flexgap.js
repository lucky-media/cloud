const plugin = require("tailwindcss/plugin");

const half = (value) => {
    return value.replace(/\d+(.\d+)?/, (number) => number / 1);
};

module.exports = plugin.withOptions(function () {
    return function ({ addUtilities, e, theme, variants }) {
        Object.entries(theme("gap")).forEach(([key, value]) =>
            addUtilities(
                {
                    [`.flex-gap-${e(key)}`]: {
                        marginTop: `-${half(value)}`,
                        marginLeft: `-${half(value)}`,
                        "& > *": {
                            marginTop: half(value),
                            marginLeft: half(value),
                        },
                    },
                },
                variants("gap")
            )
        );
    };
});
