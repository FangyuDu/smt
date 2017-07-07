const express = require("express");
const app = new express();
const path = require("path");
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'html')))


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(80, (err) => {
  console.log('服务已在80端口启动');
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// 连接数据库开始
const C = require('./bin/connect.js')
C.connect( err => {
  if (err) {
      console.error(err.stack);
      return;
  }
  console.log('连接ID' + C.threadId);
})
// 连接数据库结束

// 添加路由
require('./bin/router')(app);

// 注册测试
// let user = {
//   user: 'dfy',
//   name: '逐云',
//   password: 'dfy1234'
// }
// const reg = require("./bin/member/query")
// let sql = "select count(user) as count from users where user= 'aaba'"
// reg(sql, (res) => {
//   console.log(res[0].count)
// })
// 注册测试结束