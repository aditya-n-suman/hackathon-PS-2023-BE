const { login, register } = require("../controllers/authController");
const { products } = require("../controllers/dataController");

function initRoutes(app) {
  app.post("/register", register);
  app.post("/login", login);
  app.get("/products", products);
}

module.exports = initRoutes;
