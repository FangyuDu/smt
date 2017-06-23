const reg = require('./member/reg.js')

module.exports = app => {
  app.post('/bin/reg', (req, res) => {
    let data = req.body
    reg(data, () => {
      res.send('{flag:1}')
      res.end();
    })
  })
}