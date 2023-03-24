const productList = require("../products/index.get.json");

const dataController = () => {
  return {
    products: (req, res) => {
      res.send(productList);
    },
  };
};

module.exports = {
  products: dataController().products,
};
