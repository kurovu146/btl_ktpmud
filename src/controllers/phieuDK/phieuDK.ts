import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";

export const phieuDK = (req: Request<{}, {}, { msPDK: string, MSSV: number, msPhong: string, NgayBD: Date, GiaPh: number, Tongtien: number, NgayLP: Date, NguoiLP: string }>, res: Response) => {
    //TODO

    const mysql = MySQLDb.getInstance();
    const db = mysql.db;
    var msPDK = req.body.msPDK;
    var MSSV = req.body.MSSV;
    var msPhong = req.body.msPhong;
    var NgayBD = req.body.NgayBD;
    var GiaPh = req.body.GiaPh;
    var Tongtien = req.body.Tongtien;
    var NgayLP = req.body.NgayLP;
    var NguoiLP = req.body.NguoiLP;
    var input = {
        msPDK,
        MSSV,
        msPhong,
        NgayBD,
        GiaPh,
        Tongtien,
        NgayLP,
        NguoiLP
    }

    db.query(`INSERT INTO phieudk SET ?`, input, function(err, results) {
        if (err) throw err;
        res.render("phieuDK", {result: "Đăng kí thành công!"});
    });

}