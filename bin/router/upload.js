const fs = require('fs')

function upload (app) {
  app.post('/upload', (req, res) => {
    // 文件名
    var tmp_name = req.files
    res.send(tem_name);
    res.end();
  })
}

module.exports = upload