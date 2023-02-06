import express, { Express } from "express";

const app: Express = express();
const PORT = process.env.PORT || 5001;

app.use(express.static(`${__dirname}/public`));
app.set("port", PORT);

app.get("/sync", (req, res) => {
  const models = require("models");
  models.sequelize.sync().then(() => {
    res.send("database sync completed!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
