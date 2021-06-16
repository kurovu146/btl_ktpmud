import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";

type RequestPayload = {
    MSSV: number
    Nganh: string
    Hoten: string
    CMND: number
    NgaySinh: Date
    GioiTinh: string
    QueQuan: string
    SDT: number
    Email: string
}

export const student = (req: Request<{}, {}, RequestPayload>, res: Response) => {
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query('INSERT INTO sinhvien SET ?', req.body, function (err, results) {
        if (err) throw err;
        res.render("student", { student: "Nhập thông tin thành công!" });
    });
}