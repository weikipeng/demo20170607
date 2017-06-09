
//---------------
// const express = require("express")
// const app = express()
//
// app.get("/",function(req,res){
//   res.send("Hello world")
// })
//
// app.listen(3000,function(){
//   console.log("app start at port: 3000");
// })

if (process.env.NODE_ENV === 'production') {

}else{
  // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
      "plugins": [
        [
          "babel-plugin-webpack-loaders",
          {
            "config": "./webpack.config.babel.js",
            "verbose": false
          }
        ]
      ]
    });
    require('babel-polyfill');

    require('./server/server');
}
