[toc]

note
=====
## 95 webpack
npm install --save-dev webpack webpack-dev-middleware webpack-dev-server webpack-externals-plugin webpack-hot-middleware webpack-manifest-plugin

"webpack": "2.1.0-beta.8",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-dev-server": "^2.1.0-beta.0",
    "webpack-externals-plugin": "^1.0.0",
    "webpack-hot-middleware": "^2.10.0",
    "webpack-manifest-plugin": "^1.0.1"

## postcss-focus
npm install --save-dev postcss-cssnext postcss-focus postcss-reporter

## 96 babel-polyfill
babel-polyfill

npm install --save babel-polyfill

## 97 babel-plugin-webpack-loaders
babel-plugin-webpack-loaders

npm install --save-dev babel-cli babel-plugin-webpack-loaders

## 98 babel-register
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
