module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        snowflakesFall: {
          "0%": { transform: "translateY(0vh)" },
          "100%": { transform: "translateY(110vh)" },
        },
        snowflakesShake: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(80px)" },
        },
      },
      animation: {
        snowflakesFall: "snowflakesFall 10s linear infinite",
        snowflakesShake: "snowflakesShake 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
