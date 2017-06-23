let C = require('../connect');

function reg(data, cb) {
  if (!data) {
    return false;
  }
  let sql = "INSERT INTO `dfy`.`users` (`user`, `password`, `name`) VALUES ('" + data.user + "', '" + data.password + "', '"+ data.name +"');"
  C.query(sql, (err, res) => {
    if (err) throw err;
    console.log(data.user + ',注册成功')
    if (cb instanceof Function) {
      cb()
    }
  })
}

module.exports = reg