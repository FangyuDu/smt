let C = require('../connect');


function addNote (data, cb) {
  if (!data) {
    return false;
  }
  let sql = "INSERT INTO `dfy`.`note` (`userID`, `noteText`) VALUES ('" + data.userID + "', '" + data.noteText + "');"
  C.query(sql, (err) => {
    if (err) throw err;
    if (cb instanceof Function) {
      cb()
    }
  })
}
function showNote(id, cb) {
  if (!id) {
    return false;
  }
  let sql = "SELECT * FROM `dfy`.`notes` WHERE userID = " + id
  C.query(sql, (err, res) => {
    if (err) throw err;
    if (cb instanceof Function) {
      cb(res)
    }
  })  
}
module.exports = {
  addNote,
  showNote
}