const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM BIBLIOTECA;',
            (error, resultado, fields) => {
                if(error) {return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        ) 
    });
});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO BIBLIOTECA (DS_BIBLIOTECA, DS_AUTOR, NR_ANO) VALUES(?,?,?)',
            [req.body.dsbiblioteca, req.body.autor, req.body.ano],
            (error, resultado, field) =>{
                conn.release();
                if(error) {return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Livro Cadastrado',
                    idbilioteca: resultado.insertId
                })
            }
        )
    });

});

module.exports = router;