//1. list t-shirts - json, unique product
//2. diff between get & post, admin: form to add t-Shirt

const express = require("express");
const app = express();
const path = require("path");
const trendingTShirts = require("./product-list");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const productRouter = require("./routes/product-routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/product", productRouter);
app.set("view engine", "ejs");

app.listen(8888, () => console.log("Express Server started at 8888 "));

app.get("/admin/new", (req, resp) => {
  resp.sendFile(__dirname + "/public/new-product.html");
});

app.post("/admin/addProduct", (req, resp) => {
  //collect all info, prepare tshirt, tShirt update list
  const body = req.body;
  const tShirt = {
    id: trendingTShirts.length + 1,
    color: body.color,
    size: body.size,
    quote: body.quote,
    price: body.price,
  };
  trendingTShirts.push(tShirt);
  resp.send("Added tShirt with Quote: " + tShirt.quote);
});
