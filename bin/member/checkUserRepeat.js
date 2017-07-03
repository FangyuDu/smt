let C = require('../connect');

function checkUserRepeat (user, cb) {
  if (!user) {
    return false;
  }
  console.log('检测：', user);
  let sql = `select count(user) as count from users where user= '${user}'`
  C.query(sql, (err, res) => {
    if (err) throw err;
    if (cb instanceof Function) {
      cb(res[0].count)
    }
  })
}

module.exports = checkUserRepeat