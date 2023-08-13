const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const hotelesRoutes = require ("./source/database/routes/Hoteles.routes");


dbConnection();
app.use(express.json());
app.use("/api/hoteles",hotelesRoutes);

app.use(cors());

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(4000);