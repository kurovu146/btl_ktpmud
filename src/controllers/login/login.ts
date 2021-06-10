import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";

export const login = (req: Request<{}, {}, { username: string, password: string }>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    db.query('SELECT username FROM users',function(err, results) {
        if (err) throw err;
        const user = results;

        var count = 0;

        for (let ojb of user) {
            if (req.body.username !== ojb.username) {
                count++;
            }
        }
        
        if (count) {
            res.status(400).send("Tên đăng nhập chưa chính xác!");
            return;
        }
    });

    db.query('SELECT password FROM users',function(err, results) {
        if (err) throw err;
        const user = results;

        var count = 0;

        for (let ojb of user) {
            if (req.body.username !== ojb.password) {
                count++;
            }
        }
        
        if (count) {
            res.status(400).send("Mật khẩu chưa chính xác!");
            return;
        }

        res.cookie('name', 'admin', { expires: new Date(Date.now() + 9000000000) });
        res.redirect("/");
    });


    // db.query('SELECT username, password FROM users', function (err, results) {
    //     if (err) throw err;
    //     const user = results;

    //     var count1 = 0;
    //     var count2 = 0;

    //     for (var ojb of user) {
    //         if (req.body.username !== ojb.username) {
    //             count1++;
    //         }
    //     }
    //     if (count1) {
    //         res.status(400).send("Tên đăng nhập chưa chính xác!");
    //         res.redirect("/login");
    //     }

    //     for (var ojb of user) {
    //         if (req.body.password !== ojb.password) {
    //             count2++;
    //         }
    //     }
    //     if (count2) {
    //         res.status(400).send('Mật khẩu chưa chính xác!');
    //         res.redirect("/login");
    //     }

    //     res.cookie('name', 'admin', { expires: new Date(Date.now() + 9000000000) });
    //     res.redirect("/");
    // });
};