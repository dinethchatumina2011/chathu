const express = require('express');
const app = express();
const __path = process.cwd();
const PORT = process.env.PORT || 8000;
const BASE_PATH = process.env.BASE_PATH || '';
let code = require('./pair'); 

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.use('/code', code);

router.use('/', async (req, res, next) => {
    res.sendFile(__path + '/main.html')
});

app.use(BASE_PATH, router);

app.listen(PORT, () => {
  console.log(`╔═══════════════════════════╗`);
  console.log(`║  CHATUWA BOT — ONLINE  Port: ${PORT}   ║`);
  console.log(`╚═══════════════════════════╝`);
});

module.exports = app;
