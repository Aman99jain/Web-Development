const express = require("express");
const app = express();
const trendingTShirts = require("../product-list");

const productRouter = express.Router();

productRouter.get("/trending", (req, resp) => {
  resp.status(200);
  // resp.json(trendingTShirts);
  resp.render("trendingView", { tShirts: trendingTShirts });
});

productRouter.get("/:productId", (req, resp) => {
  resp.status(200);
  console.log("productId:" + req.params.productId);
  //   resp.json(trendingTShirts[req.params.productId - 1]);
  resp.render("productDetailView", {
    tShirt: trendingTShirts[req.params.productId - 1],
  });
});

module.exports = productRouter;
