const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // LE INDICO EL MODO EXPLICITAMENTE
  entry: './src/index.js', // el punto de entrada de mi aplicación
  output: { // Esta es la salida de mi bundle
    path: path.resolve(__dirname, 'public_html/js'),
    // resolve lo que hace es darnos la ruta absoluta de el S.O hasta nuestro archivo
    // para no tener conflictos entre Linux, Windows, etc
    filename: 'main.js',
    // EL NOMBRE DEL ARCHIVO FINAL,
  },
  resolve: {
    extensions: ['.js'] // LOS ARCHIVOS QUE WEBPACK VA A LEER
  },
  module: {
    // REGLAS PARA TRABAJAR CON WEBPACK
    rules: [
      {
        test: /\.m?js$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
        exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}