const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),//动态获取路径 绝对路径
    filename:'bundle.js' ,
    publicPath:'dist/' //url 的 会自动加dist/
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // $ 结尾 ^ 开始
        use:['style-loader','css-loader'] // 多个loader时， 从右到左读
        // css-loader 只负责加载
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[
        {
          loader:'url-loader',
          options:{
          // 当加载的图片小于limit时，会将图片转化为base64格式
          limit:1000,
          // 当大于时，会使用file-loader 进行加载 复制到dist目录
          name:'img/[name].[hash:8].[ext]'
          // 命名规范
          },
        }
      ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/, // exclude 排除的意思
        use:{
          loader:'babel-loader',
          options:{
            presets:['es2015']
          }
        }
      }
    ]
  }
}