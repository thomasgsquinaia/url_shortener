const express = require("express");
const cors = require("cors");
const { sequelize } = require('./models')
const router = require("./routes/router");
class App {
  constructor() {
    const app = express();
    this.app = app;
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors())
    this.app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization');
      next();
  });
  }
  routes() {
    this.app.use("/", router);
  }
  init() {
    const PORT = `${process.env.PORT || 3001}`;
    this.app.listen(PORT, () =>
      console.log(`Server is running at http://localhost:${PORT}.`)
    );
  }
}

sequelize.sync();

module.exports = { App };


