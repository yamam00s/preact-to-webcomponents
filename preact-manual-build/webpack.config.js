module.exports = {
  entry: {
    greeting:  "./src/Greeting.tsx",
    greetingSecond:  "./src/GreetingSecond.tsx",
    form:  "./src/Form.tsx",
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: { loader: "ts-loader"},
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // test-utilsの下にある必要があります。
    },
  }
}
