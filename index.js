const express = require("express");
const cors = require("cors");
const router = require("./Routes");

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
    res.json("Yendo no, llegando");
});

app.listen(PORT, () => {
    console.log(`App running locally on port #${PORT}`);
});
