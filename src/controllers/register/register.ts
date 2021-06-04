import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";


export const register = (req: Request<{},{},{username: string, password: string}>, res: Response) => {
    //TODO
    const body = req.body;

    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let id = body.username;
    let pass = body.password;
    let b={id:id, password:pass} 

    db.query('SELECT * FROM users', b ,function(err, results) {
        if (err) throw err;
        const user = results;

        var count = 0;

        for (let ojb of user) {
            if (req.body.username === ojb.id) {
                count++;
            }
        }
        
        if (count !== 0) {
            res.status(400).send("Tên đăng nhập đã được sử dụng!");
            return;
        }
    });

    db.query('INSERT INTO users SET ?', b ,function(err, results) {
        if (err) throw err;
        const user = results;
        
        res.redirect("/login");
    });
};