const path=require('path')
//导入安装在内存中生成的ntml页面的插件
const htmlwebplugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    // mode:'development' //设置mode
  plugins:[
      //创建一个在内存中生成html页面的插件
    new htmlwebplugin({
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module:{
      //这个节点用来配置所有第三方模块加载器
      rules:[
          {test:/\.css$/,use:['style-loader','css-loader']},
          {test:/\.vue$/,loader:['vue-loader']},
          //处理图片的加载器
          {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader？limit=5000&name=[hash:8]-[name].[ext]' },
          {test:/\.(wff2|woff|svg|ttf|eot)/,use:'url-loader'}//字体加载器
      ]
  }
}

//使用webpack-dev-server这个工具，来实现自动打包编译的功能
//1.运行 npm i webpack-dev-server -D 把这个工具安装到项目本地开发依赖
//2.安装完毕后这个工具用法，和webpack命令用法完全一样
//由于我们是在项目中，本地安装webpack-dev-server ,所以，无法把它当作脚本命令执行
//webpack-dev-server 帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上，而是，直接托管到了电脑的内存。
//