import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";

type bienban = { 
    msBBVP: string, 
    MSSV: number, 
    msPhong: string, 
    LoiVP: string, 
    HinhThucXLVP: string, 
    NguoiLBB: string, 
    NgayLBB: Date
} 

export const record = (req: Request<{}, {}, bienban>, res: Response) => {
    //TODO

    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query(`INSERT INTO bienbanvipham SET ?`, req.body, function(err, results) {
        if (err) throw err;
        res.render("record");
    });

}