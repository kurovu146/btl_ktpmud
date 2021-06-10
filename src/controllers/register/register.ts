import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";


export const register = (req: Request<{},{},{username: string, password: string}>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let id = req.body.username;
    let pass = req.body.password;
    let input = {username:id, password:pass} 

    db.query('SELECT username FROM users',function(err, results) {
        if (err) throw err;
        const user = results;

        var count = 0;

        for (let ojb of user) {
            if (req.body.username === ojb.username) {
                count++;
            }
        }
        
        if (count) {
            res.status(400).send("Tên đăng nhập đã được sử dụng!");
            return;
        }
    });

    db.query('INSERT INTO users SET ?', input ,function(err, results) {
        if (err) throw err;
        res.redirect("/login");
    });
};