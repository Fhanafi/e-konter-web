const express = require('express');
const app = express();

app.get('/about',(req,res) => {
  res.send(console.log('work'))
});