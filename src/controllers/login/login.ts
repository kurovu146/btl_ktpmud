import express, { Request, Response } from "express";
import { MySQLDb } from "../../db/db";
import { hashPassword } from "../../libs/hash";

export const login = (req: Request<{}, {}, { username: string, password: string }>, res: Response) => {
    //TODO
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    let username = req.body.username;
    let password = req.body.password;

    db.query(`SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`,function(err, results) {
        if (err) throw err;

        if (results.length === 0) {
            res.render("login",{validate: "Tài khoản không tồn tại hoặc bạn nhập sai mật khẩu, tài khoản"});
            return;
        }


        res.cookie('username', 'admin', { expires: new Date(Date.now() + 9000000000) });
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