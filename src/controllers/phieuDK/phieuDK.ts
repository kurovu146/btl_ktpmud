import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";

type phieuDangKi = { 
    msPDK: string, 
    MSSV: number, 
    msPhong: string, 
    NgayBD: Date, 
    GiaPh: number, 
    Tongtien: number, 
    NgayLP: Date, 
    NguoiLP: string 
} 

export const phieuDK = (req: Request<{}, {}, phieuDangKi>, res: Response) => {
    //TODO

    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query(`INSERT INTO phieudk SET ?`, req.body, function(err, results) {
        if (err) throw err;
        res.render("phieuDK", {result: "Đăng kí thành công!"});
    });

}