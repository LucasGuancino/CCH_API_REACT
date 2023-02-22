const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM DISCIPLINAS;',
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
            'INSERT INTO DISCIPLINAS (DS_DISCIPLINA, NM_PROFESSOR, DS_PERIODO) VALUES(?,?,?)',
            [req.body.dsdisciplina, req.body.professor, req.body.periodo],
            (error, resultado, field) =>{
                conn.release();
                if(error) {return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Disciplina Cadastrada',
                    iddisciplina: resultado.insertId
                })
            }
        )
    });

});

module.exports = router;