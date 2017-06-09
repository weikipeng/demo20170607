[toc]

note
=====
## 95 webpack

npm install --save-dev eventsource-polyfill

兼容 IE

說到 IE，一堆工程師的頭都痛了。
但 eventsource-polyfill 可以讓 Webpack 兼容 IE！
修改 webpack.config.js 的 entry：

entry: [
  // 一定要在前面
  'eventsource-polyfill',
  './src/main.jsx',
],
------
查找 webpack.optimize.CommonsChunkPlugin
webpack.DefinePlugin
react-hot-loader

-----

npm install --save-dev webpack webpack-dev-middleware webpack-dev-server webpack-externals-plugin webpack-hot-middleware webpack-manifest-plugin

"webpack": "2.1.0-beta.8",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-dev-server": "^2.1.0-beta.0",
    "webpack-externals-plugin": "^1.0.0",
    "webpack-hot-middleware": "^2.10.0",
    "webpack-manifest-plugin": "^1.0.1"


    //安装
    npm install --save-dev style-loader css-loader

## postcss-focus
npm install --save-dev postcss-loader postcss-cssnext postcss-focus postcss-reporter

"postcss-cssnext": "^2.6.0",
"postcss-focus": "^1.0.0",
"postcss-loader": "^0.9.1",
"postcss-reporter": "^1.3.3",

------
use: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
------
postcss: () => [
  postcssFocus(),
  cssnext({
    browsers: ['last 2 versions', 'IE > 10'],
  }),
  postcssReporter({
    clearMessages: true,
  }),
],
------
``` javaScript

module.exports = {
  plugins: [
    require('postcss-conditionals')(),
    require('postcss-simple-vars')(),  //https://www.npmjs.com/package/postcss-simple-vars
    require('postcss-each')(),
    require('postcss-for')(),
    require('postcss-mixins')(),
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-atroot')(),
    require('cssnext')({
      features: {rem: false}
    }),
    require('postcss-extend')()
  ]
}
```
----

## babel
npm install --save-dev babel-loader babel-eslint babel-plugin-webpack-loaders babel-polyfill babel-preset-es2015 babel-preset-es2015-native-modules babel-preset-react babel-preset-react-optimize babel-preset-stage-0 babel-register

"babel-eslint": "^6.0.4",
"babel-loader": "^6.2.4",
"babel-plugin-webpack-loaders": "^0.7.0",
"babel-polyfill": "^6.9.1",
"babel-preset-es2015": "^6.9.0",
"babel-preset-es2015-native-modules": "^6.6.0",
"babel-preset-react": "^6.5.0",
"babel-preset-react-optimize": "^1.0.1",
"babel-preset-stage-0": "^6.5.0",
"babel-register": "^6.9.0",

### 96 babel-polyfill
babel-polyfill

npm install --save babel-polyfill

### 97 babel-plugin-webpack-loaders
babel-plugin-webpack-loaders

npm install --save-dev babel-cli babel-plugin-webpack-loaders

### 98 babel-register
npm install babel-register --save-dev
require("babel-register");

BABEL_DISABLE_CACHE=1

## 99 nodemon
npm install -g nodemon

---------
## 选型
nodejs + express + react + redux

打包发布 webpack
 grunt,nodemon,

## 01---Installing
npm init

### express
npm install express --save

### react
npm install --save react react-dom

### redux
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools

### babel
ES2015 and beyond
> npm install --save-dev babel-cli babel-preset-env

and add "env" to your .babelrc presets array.

Polyfill
> npm install --save-dev babel-polyfill

JSX and Flow

> npm install --save-dev babel-preset-react

#### babel 安装

npm install --save-dev babel-core
require("babel-core").transform("code", options);

Create .babelrc configuration file
{
  "presets": ["env"]
}

## Git
git init
git status
git commit -m "init project"

git remote add origin https://github.com/weikipeng/demo20170607.git
git push -u origin master

## cross-env
简单来说，就是windows不支持NODE_ENV=development的设置方式。
安装cross-env:
npm install cross-env --save-dev
在NODE_ENV=xxxxxxx前面添加cross-env就可以了。

## Webpack postcss

原因：Webpack 2.1.0-beta23 之后的config里不能直接包含自定义配置项
解决：将postcss和devServer替换成以下写法即可

plugins: {
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function () {
        return [precss, autoprefixer];
      },
      devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
      }
    }
  })
}
参考：https://github.com/webpack/webpack/pull/2974#issuecomment-245857168
