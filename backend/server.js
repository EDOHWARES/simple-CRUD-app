const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'simple-crud-app'
});

app.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, data) => {
        if (err) return res.json('Error');
        else {
            return res.json(data);
        }
    })
});

app.post('/create', (req, res) => {
    const sql = 'INSERT INTO students (`name`, `email`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
});

app.put('/update/:id', (req, res)=> {
    const sql = 'update students set `name` = ?, `email` = ? where id = ?';
    const values = [
        req.body.name,
        req.body.email
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})

app.delete('/student/:id', (req, res) => {
    const sql = 'DELETE FROM students WHERE id = ?';
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})


const port = 8081;
app.listen(port, () => {
    console.log(`https://localhost:${port}`)
});