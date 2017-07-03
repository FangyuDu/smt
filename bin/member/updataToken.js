let C = require('../connect');

function updataToken (user, cb) {
  if (!user) {
    return false;
  }
  let sql = `UPDATE users SET tokenID='${user.tokenID}' WHERE user= '${user.user}'`
  C.query(sql, (err) => {
    if (err) throw err;
    if (cb instanceof Function) {
      cb()
    }
  })
}

module.exports = updataToken