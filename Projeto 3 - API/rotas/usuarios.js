const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {        
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM USUARIOS;',
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
            'INSERT INTO USUARIOS (DS_USUARIOS, DS_RA, DS_PROFISSAO) VALUES(?,?,?)',
            [req.body.dsusuarios, req.body.ra, req.body.profissao],
            (error, resultado, field) =>{
                conn.release();
                if(error) {return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Usuário Cadastrado',
                    idusuario: resultado.insertId
                })
            }
        )
    });

});

module.exports = router;