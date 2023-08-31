const { join, __dirname } = require("path")

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  },
}
