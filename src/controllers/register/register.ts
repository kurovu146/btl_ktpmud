import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";


export const register = (req: Request<{},{},{username: string, password: string}>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let username = req.body.username;
    let password = req.body.password;
    let input = {username, password} 

    db.query(`SELECT username FROM users WHERE username = ${username}`,function(err, results) {
        if (err) throw err;
        
        
        if (username) {
            res.status(400).send("Tên đăng nhập đã được sử dụng!");
            return;
        }
    });

    db.query('INSERT INTO users SET ?', input ,function(err, results) {
        if (err) throw err;
        res.redirect("/login");
    });
};