// Main starting point of application.

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

// App Setup

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

/*
疑問点メモ

・expressってなんなん
  ・nodejsのウェブアプリケーションフレームワーク(ライブラリ)
・nodeではimportしか使えないのか
  ・nodeはES6の構文を理解していないから使えないっぽい
  ・使うにはbabelとかのトランスパイラを噛ませないといけない
・expressインスタンスのuseはなんなん
・morganってなんなん
・bodyParserってなんなん

*/
