import { json } from "body-parser";
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

controller.get("/phieuDK", (req: Request, res: Response) => {
    res.render("phieuDK", {result: "Vui lòng nhập thông tin để đăng kí!"});
})

controller.get("/bill_input", (req: Request, res: Response) => {
    res.render("bill_input", {result: "Nhập thông tin hoá đơn"});
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

controller.get("/bill_info", (req: Request, res: Response) => {
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query(`SELECT * FROM hoadon`, function(err, results) {
        if (err) throw err;
        const student = formatData(results)
        res.render("bill_info", { student })
    })
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
        const student = formatData(results)
        res.render("stu_info", { student })
    })
})

function formatData(data: any[]) {
    const formattedData = data.map((i: any) => {
        const birth = new Date(i.NgaySinh);
        const NgayLapHD = new Date(i.NgayLapHD);
        const date = new Date(i.NgayNop);
        return {
            ...i,
            NgaySinh: birth.getFullYear()+'-' + (birth.getMonth()+1) + '-'+birth.getDate(),
            NgayLapHD: NgayLapHD.getFullYear()+'-' + (NgayLapHD.getMonth()+1) + '-'+NgayLapHD.getDate(),
            NgayNop: date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate(),
        }
    })
    return formattedData
}