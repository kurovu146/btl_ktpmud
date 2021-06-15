import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";


export const student = (req: Request<{},{},{MSSV: number, Nganh: string, Hoten: string, CMND: number, NgaySinh: Date, GioiTinh: string, QueQuan: string, SDT: number, Email: string}>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let MSSV = req.body.MSSV;
    let Nganh = req.body.Nganh;
    let Hoten = req.body.Hoten;
    let CMND = req.body.CMND;
    let NgaySinh = req.body.NgaySinh;
    let GioiTinh = req.body.GioiTinh;
    let QueQuan = req.body.QueQuan;
    let SDT = req.body.SDT;
    let Email = req.body.Email;
    let input = 
        {
            MSSV, 
            Nganh, 
            Hoten, 
            CMND, 
            NgaySinh,
            GioiTinh,
            QueQuan,
            SDT,
            Email
        } 

    db.query('INSERT INTO sinhvien SET ?', input ,function(err, results) {
        if (err) throw err;
        res.render("student", {student: "Nhập thông tin thành công!"});
    });
}