import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";

type bill = {
    msHD: string,
    msPhong: string,
    NgayLapHD: Date,
    NguoiLapHD: string,
    Sodien: number,
    Luongnuoc: number,
    TienDien: number,
    TienNuoc: number,
    TongTien: number,
    NgayNop: Date,
    Nguoinop: string
}

export const bill_input = (req: Request<{}, {}, bill>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query(`INSERT INTO hoadon SET ?`,req.body, function (err, results) {
        if (err) throw err;

        res.render("bill_input", { result: "Nhập hoá đơn thành công!" });
    });
};