import express, { Request, Response } from "express";

export const controller = express.Router();

var mysql = require('mysql'); // nhúng module mysql vào trang
const db = mysql.createConnection ({
   host: 'localhost:1422',
   user: 'admin',
   password: '123456',
   database: 'bookstore'  //tên database muốn kết nối
});

controller.get("/", (req: Request, res: Response) => {
    if (req.cookies.name !== "admin") {
        res.redirect("/login");
        return;
    }

    res.render("index", {page: "home"})
})

controller.get("/login", (req: Request, res: Response) => {
    if (req.cookies.name === "admin") {
        res.redirect("/");
        return;
    }
    res.render("login");
})

controller.get("/register", (req: Request, res: Response) => {
    res.render("register");
})

controller.get("/notification", (req: Request, res: Response) => {
    res.render("notification")
})

controller.get("/file", (req: Request, res: Response) => {
    res.render("file")
})

controller.get("/bill", (req: Request, res: Response) => {
    res.render("bill")
})

