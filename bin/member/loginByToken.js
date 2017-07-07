let C = require('../connect');

function loginByToken (data, cb) {
  if (!data) {
    return false;
  }
  let sql = `select *,count(user) as count from users where tokenID = '${data.tokenID}'`
  C.query(sql, (err, res) => {
    if (err) throw err;
    res = res[0];
    if (res.count) { // 如果返回正确
      if (cb instanceof Function) { // 如果存在回调
        cb(res)
      }
    } else { // 返回登录错误的提示
      let d = {
        flag: 0,
        message: '用户名或密码错误！'
      }
      if (cb instanceof Function) { // 如果存在回调
        cb(d)
      }      
    }
  })
}

module.exports = loginByToken

// 获取前端传送的数据
// 验证