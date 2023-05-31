// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: path.resolve(__dirname,"..",'./src/index.tsx'),
  resolve:{
    extensions:['.tsx','.ts','.js'],
  },

  module:{
    rules:[
        {
            test:/\.(ts|js)x?/,
            exclude: /node_modules/,
            use:[
                {
                    loader:'babel-loader',
                },
            ],
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
            type:'asset/resource',
        },{
            test:/\.(woff(2)?|eot|ttf|otf|svg)$/,
            type:'asset/inline',
        }
    ],
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, '..','./build'),
    filename: 'bundle.js'
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development

  plugins:[
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'..','./src/index.html'),
    })
  ]

};
