const express =require('express');
const mysql = require('mysql')
const cors= require('cors')

const app= express()
app.use(cors())


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"test"
})

app.get('/',(re,res)=>{
    return res.json("from backend bolte");
})

app.get('/database_csv',(req,res)=>{
    const sql= "SELECT * FROM database_csv";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/dbSix',(req,resp)=>{
    const sqli= "SELECT * FROM dbSix";
    db.query(sqli,(err,ans)=>{
        if(err) return resp.json(err);
        return resp.json(ans);
    })
})
app.get('/dbTwo',(reqs,respo)=>{
    const sqliz= "SELECT * FROM dbTwo";
    db.query(sqliz,(err,anss)=>{
        if(err) return respo.json(err);
        return respo.json(anss);
    })
})

app.listen(8081,()=>{
    console.log("i am listening to the command");
})