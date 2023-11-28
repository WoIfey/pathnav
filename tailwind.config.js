module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
      backgroundImage: {
        custom: ["-webkit-linear-gradient(#163816, #195E19)"],
      },
      height: {
        'screen': [
          '100vh', '100dvh'
        ]
      },
      minHeight: {
        'screen': [
          '100vh', '100dvh'
        ]
      },
      maxHeight: {
        'screen': [
          '100vh', '100dvh'
        ]
      }
    },
  },
  plugins: [],
}