import express from "express";
import { controller } from "./controllers";
import { login } from "./controllers/login/login";
import cookieParser from "cookie-parser";
import {json, urlencoded} from "body-parser";

const app = express();
const mysql = require('mysql');

app.use(json());
app.use(urlencoded());
app.set("view engine", 'ejs');  

app.use(express.static("views"));
app.use(cookieParser());

app.post("/login", login);

app.use("/", controller);

app.listen(1422, () => {
    console.info("Listen port 1422");
})