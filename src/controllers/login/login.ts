import express, { Request, Response } from "express";
import { hashPassword } from "../../libs/hash";

const user = {
    userName: "tuan1422",
    hash: "3a81b40bc8557900bd7b62608bcf17c7a6215a0c5d17bf3f4dc0d0ded33d953abf17e60b1c60b62bda635042155e899193bc1707058b1a6dee1faa2c2c4b4c77",
    salt: "495a6308376e9f45a963641d3f276f7a"
}

export const  login = (req: Request<{},{},{username: string, password: string}>, res: Response) => {
    //TODO

    if (req.body.username !== user.userName) {
        res.status(400).send("Tên đăng nhập chưa chính xác!");
        return;
    }

    if (hashPassword(req.body.password, user.salt) !== user.hash) {
        res.status(400).send('Mật khẩu chưa chính xác!');
        return;
    }

    res.cookie('name', 'admin', { expires: new Date(Date.now() + 900000)});
    res.redirect("/");
};