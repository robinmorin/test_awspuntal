"use strict";
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'awspuntal.cy8mjhkps5hp.sa-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'r0b1nm0r1n',
    database: 'awspuntal'
});

let dadosModel = {};

dadosModel.getDados = (callback) => {
  if(connection) {
    connection.query('SELECT * FROM dados_pessoas order by id',
      (err,rows) => {
          if(err) {
            throw err;
          } else {
            callback(null,rows);
          }
        }
      )
  }
};

dadosModel.insertDados = (data, callback) => {
  if(connection){
    connection.query('INSERT INTO dados_pessoas SET ?',data,
        (err,result) => {
          if(err){
            throw err;
          } else {
            callback(null, {'InsertId':result.insertId
                          })
         }
      }
    )
  }
};

module.exports = dadosModel;
