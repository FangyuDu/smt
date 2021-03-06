const checkUserRepeat = require("./member/checkUserRepeat.js")
const reg = require('./member/reg.js')
const login = require('./member/login.js')
const loginByToken = require('./member/loginByToken')
const multiparty = require("multiparty")
const note = require('./member/note.js')

// 上传区块
const upload = require('./router/upload.js')

module.exports = app => {
  // 上传文件
  app.post('/upload', (req, res) => {
    // 文件名
    let form = new multiparty.Form({uploadDir: './upload'});
    form.parse(req, (err, fields, files) => {
      console.log(files.file,'上传完成');
    })
    res.send('上传完成');
    res.end();
  })
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
  // 上传笔记
  app.post('/addNote', (req, res) => {
    let data = req.body
    note.addNote(data, () => {
      res.send('添加成功！');
      res.end();
    })
  })
  // 获取笔记
  app.get('/showNote', (req, res) => {
    let data = req.query
    note.showNote(data.userID, (res2) => {
      res.send(res2);
      res.end();
    })
  })
}