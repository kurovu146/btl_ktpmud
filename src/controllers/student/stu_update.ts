import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { student } from "../student/student"

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

export const update = (req: Request<{}, {}, RequestPayload>, res: Response) => {
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let student ;

    db.query('UPDATE sinhvien SET CMND = CMND WHERE MSSV LIKE `%MSSV%`' , 
            req.body, function (err, results) {
        if (err) throw err;
    });

    db.query('UPDATE sinhvien SET CMND = CMND WHERE MSSV LIKE `%MSSV%`' , 
            req.body, function (err, results) {
        if (err) throw err;
        res.render("stu_update", { student: "Nhập thông tin thành công!" });
    });
}