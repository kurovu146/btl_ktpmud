import express, { Request, Response } from "express";
import { MySQLDb } from "../db/db";

export const controller = express.Router();

controller.get("/", (req: Request, res: Response) => {
    if (req.cookies.name !== "admin") {
        res.redirect("/login");
        return;
    }

    const mysql = MySQLDb.getInstance();
    const db = mysql.db;

    const sql = "SELECT * FROM sinh_vien";
    
    db.query(sql, function(err, results) {
      if (err) throw err;
      const students = results;
      res.render("index", {students: students})
    });

})

controller.get("/login", (req: Request, res: Response) => {
      res.render("login")
})

controller.get("/register", (req: Request, res: Response) => {
    res.render("register");
})

controller.get("/notification", (req: Request, res: Response) => {
    res.render("notification")
})

controller.get("/profiles", (req: Request, res: Response) => {
    res.render("profiles")
})

controller.get("/bill", (req: Request, res: Response) => {
    res.render("bill")
})

