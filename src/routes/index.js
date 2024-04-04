// Theo mô hình MVC thì routes sẽ là view

const UserRouter = require("./UserRoute");

const routes = (app) => {
  app.use("/api/user", UserRouter);
};

module.exports = routes;
