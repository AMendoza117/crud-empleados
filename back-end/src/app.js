const express =  require('express');
const morgan = require('morgan');
const mysql= require('mysql');
const myConnection= require('express-myconnection')

const app = express();
const cors = require('cors');


//Importando rutas 


app.set('port',3000);

app.use(cors());
app.use(morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '1234',
    port:3306,
    database: 'prueba0431'
},'single'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/empleados.router'))
module.exports = app;