import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes/router.js";
import { appOpt } from "./config/app.js";

const app = express();
const port = appOpt.port || 3040;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(appOpt.apiUrl + "/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
