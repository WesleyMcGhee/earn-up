const express = require("express");
const cors = require("cors");
const app = express();
const port = 4500;
const ctrl = require("./controller");

app.use(express.json());
app.use(cors());
app.post("/signup", ctrl.postSignup);
app.post("/signin", ctrl.postLogin);

app.listen(port, () => console.log(`Server is up and running on ${port}...`));
