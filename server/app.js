import express from "express";
import config from "config"
//Db connect
import "../server/utils/dbConnect.js"
//Import of admin
import Adminrouter from "./controllers/admins/index.js";

//App create
const app = express();

const PORT = 7000;


app.use(express.json());

app.get("/", (res, req) => {
    res.send("Server is running")
})

app.use("/admin", Adminrouter)

app.use((req, res) => {
    res.status(500).json({msg:"Route Error. Please check the Route"})
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})