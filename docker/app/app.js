const express = require('express');
const path = require('path');

function startFrontendServer() {
  const app2 = express();
  app2.use(express.static(path.join(__dirname, 'dist')));

  app2.get("/*all", function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  app2.listen(5173, () => {
    console.log('frontend on 5173');
  });
}
startFrontendServer();