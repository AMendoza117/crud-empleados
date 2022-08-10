const empleadosCtrl2={};
//const empleadosCtrl={}; <--- no es requerido

//const Empleado= require('../models/Empleado'); <--- no es requerido

//Consultar todos los empleados
empleadosCtrl2.getEmpleados= (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('select * from empleado',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
}

//Crear empleados
empleadosCtrl2.createEmpleado= (req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO empleado SET ?',[data],(err,empleado) => {
            res.redirect('/empleados');
            //empleadosCtrl2.getEmpleados
        })
    })
}

//Consultar un empleado en particular
empleadosCtrl2.getEmpleado=  (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM empleado WHERE _id = ?',[id],(err,rows) => {
            res.json(rows);
        });
    });
}


//Editar empleados
empleadosCtrl2.editEmpleado= (req,res)=>{
    const {id}= req.params;
    const data= req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE empleado SET ? WHERE _id = ?',[data, id],(err,rows) => {
            res.redirect('/empleados');
        });
    });
}

//Eliminar empleado
empleadosCtrl2.deleteEmpleado= (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM empleado WHERE _id = ?',[id],(err,rows) => {
            //res.redirect('/empleados');
            res.send(rows);
        })
    })
}

module.exports= empleadosCtrl2;