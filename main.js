///
/// You can get specified Database name from host server.
/// Usage :Run with 'target DB name'
///
const express = require('express');
const mysql = require('mysql');
const app = express();

const name = "'%" + process.argv[2] + "%'";
//console.log(name);

const connection = mysql.createConnection(
    {
        host:   'localhost',
        user:   'user',
        password:   'password',
    }
);
connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});
var sql = 'SHOW DATAbASES LIKE' + name;
connection.query(sql, (err, results) => {
    if(err){
        console.log('query error: ' + err);
        return;
    }
    for(const result of results){
        console.log(result);   //access of constructor RowDataPacket
    }
});
connection.end();
