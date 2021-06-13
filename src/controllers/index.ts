import express, { Request, Response } from "express";
import { MySQLDb } from "../db/db";

export const controller = express.Router();

controller.get("/", (req: Request, res: Response) => {
    if (req.cookies.username !== "admin") {
        res.redirect("/login");
        return;
    }
    res.render("index");
})

controller.get("/login", (req: Request, res: Response) => {
    if (req.cookies.username === "admin") {
        res.redirect("/");
        return;
    }
      res.render("login", {validate: ""})
})

controller.get("/register", (req: Request, res: Response) => {
    res.render("register");
})

controller.get("/notification", (req: Request, res: Response) => {
    res.render("notification")
})

controller.get("/phieuDK", (req: Request, res: Response) => {
    res.render("phieuDK", {result: "Vui lòng nhập thông tin để đăng kí!"});
})

controller.get("/profiles", (req: Request, res: Response) => {
    res.render("profiles")
})

controller.get("/bill", (req: Request, res: Response) => {
    res.render("bill")
})

