import express, { Request, Response } from "express";
import { MySQLDb } from "../db/db";
import { student } from "./student/student";

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
    res.render("register", {result: ""});
})

controller.get("/notification", (req: Request, res: Response) => {
    res.render("notification")
})

controller.get("/phieuDK", (req: Request, res: Response) => {
    res.render("phieuDK", {result: "Vui lòng nhập thông tin để đăng kí!"});
})

controller.get("/student", (req: Request, res: Response) => {
    res.render("student", {student: "Vui lòng nhập thông tin sinh viên!"});
})

controller.get("/profiles", (req: Request, res: Response) => {
    res.render("profiles")
})

controller.get("/bill", (req: Request, res: Response) => {
    res.render("bill")
})

controller.get("/record", (req: Request, res: Response) => {
    res.render("record")
})

controller.get("/update", (req: Request, res: Response) => {
    res.render("update")
})

controller.get("/stu_info", (req: Request, res: Response) => {
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query(`SELECT * FROM sinhvien`, function(err, results) {
        if (err) throw err;
        var student = results;
        res.render("stu_info", {student: student})
    })
})
