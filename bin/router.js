const checkUserRepeat = require("./member/checkUserRepeat.js")
const reg = require('./member/reg.js')
const login = require('./member/login.js')
const loginByToken = require('./member/loginByToken')

module.exports = app => {
  // 检测用户名是否存在
  app.post('/bin/checkUserRepeat', (req, res) => {
    let user = req.body.user
    console.log(user);
    checkUserRepeat(user, (bol) => {
      let data = {
        flag: bol
      }
      res.send(data);
      res.end();
    })
  })
  // 用户注册
  app.post('/bin/reg', (req, res) => {
    let data = req.body
    reg(data, () => {
      res.send('{flag:1}')
      res.end();
    })
  })
  // 用户登录
  app.post('/bin/login', (req, res) => {
    let data = req.body
    data.tokenID = data.user + (new Date()).getTime()
    let cb = {
      state: 0,
      message: '用户名或密码不正确',
      data: null
    }
    login(data, (user) => {
      if (user) {
        cb.data = user
        cb.message = '登录成功'
        cb.state = 1
      } else {
      }
      res.send(cb)
      res.end()
    })
  })
  // Token登录
  app.post('/bin/loginByToken', (req, res) => {
    let data = req.body
    let cb = {
      state: 0,
      message: '用户名或密码不正确',
      data: null
    }
    loginByToken(data, (user) => {
      if (user.count) {
        cb.data = user
        cb.message = '登录成功'
        cb.state = 1
      } else {
      }
      res.send(cb)
      res.end()    
    })
  })
}