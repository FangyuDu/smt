const express = require("express");
const app = new express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'html')))

app.listen(80, (err) => {
  console.log('服务已在80端口启动');
})

