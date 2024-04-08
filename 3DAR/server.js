const express = require('express');
const app = express();

// 将视频文件和 HTML 文件所在的文件夹设置为静态文件夹
app.use(express.static(__dirname));

// 定义根路由，返回 index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/3D.html');
});

// 启动服务器，监听 3000 端口
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
