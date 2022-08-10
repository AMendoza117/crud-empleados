// const empleadosCtrl={};

// const Empleado= require('../models/Empleado');

// //Obtener todos los empleados
// empleadosCtrl.getEmpleados= async (req,res)=>{
//     const empleados= await Empleado.find();
//     res.json(empleados);
// }

// //Crear empleados
// empleadosCtrl.createEmpleado= async (req,res)=>{
//     const empleado= new Empleado(req.body);
//     console.log(empleado);
//     await empleado.save();
//     res.send({message:'Empleado creado'});
// }

// //Obtener un empleado en particular
// empleadosCtrl.getEmpleado= async (req,res)=>{
//     const empleado= await Empleado.findById(req.params.id);
//     res.send(empleado);
// }

// empleadosCtrl.editEmpleado= async (req,res)=>{
//     const empleado = await Empleado.findByIdAndUpdate(req.params.id,req.body);
//     res.json({message: 'Empleado actualizado'});
// }

// //Eliminar empleado
// empleadosCtrl.deleteEmpleado= async (req,res)=>{
//     const empleado = await Empleado.findByIdAndDelete(req.params.id);
//     res.json({message:'Empleado eliminado'});
// }






module.exports= empleadosCtrl;