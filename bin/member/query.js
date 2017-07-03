let C = require('../connect');

function query(data, cb) {
  if (!data) {
    return false;
  }
  let sql = data
  C.query(sql, (err, res) => {
    if (err) throw err;
    if (cb instanceof Function) {
      cb(res)
    }
  })
}

module.exports = query