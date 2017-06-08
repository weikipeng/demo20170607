[toc]

note
=====

## 99 	nodemon
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
