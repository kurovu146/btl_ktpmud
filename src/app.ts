import express from "express";
import { controller } from "./controllers";
import { login } from "./controllers/login/login";
import cookieParser from "cookie-parser";
import {json, urlencoded} from "body-parser";
import { register } from "./controllers/register/register";
import { phieuDK } from "./controllers/phieuDK/phieuDK";
import { student } from "./controllers/student/student";

const app = express();

app.use(json());
app.use(urlencoded());
app.set("view engine", 'ejs');  

app.use(express.static("views"));
app.use(cookieParser());

app.post("/login", login);
app.post("/register", register);
app.post("/phieuDK", phieuDK);
app.post("/student", student);

app.use("/", controller);
    

app.listen(1422, () => {
    console.info("Listen port 1422");
})