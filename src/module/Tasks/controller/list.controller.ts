import { Request, Response, json } from 'express';
import mongoose from 'mongoose';
import {ItaskModel} from '../model/listModel'

 const ObjectId  = mongoose.Types.ObjectId;

  export const create = ((req:Request,res:Response) => {
    try {
    return res.status(200).json({msg:"ko"})

    } catch (error) { 
    return res.status(400).json({msg:"Error al crear tarea",error})
    }
  });
  //
  export const newTasks = async (req: Request, res: Response) => {
  try {
      const { nombre, tarea, cantidad, precio, completed } = req.body;
      const newTask = new ItaskModel({ nombre, tarea, cantidad, precio, completed });
      
      // Guarda la tarea y obtiene el ID generado por Mongoose
      const savedTask = await newTask.save();
      const taskId = savedTask._id;
      
      // Devuelve el ID en la respuesta//
      return res.status(201).json({ id: taskId, ...savedTask.toObject() });
      } catch (error) {
        return res.status(400).json({ msg: "Error al agregar una nueva tarea", error });
      }
  };
  //
  export const listing = ( async (req:Request,res:Response) => { 
  try {
      const tasks = await ItaskModel.find();
      return res.status(200).json(tasks)

      }catch (error) {
      return res.status(400).json({msg:"Error al mostrar el listado",error})
      }
  });
  //
  export const deliting = ( async (req:Request,res:Response) => {
  try {
    const { id } = req.params
    await ItaskModel.findByIdAndDelete(id)

    return res.status(200).json({msg:"Eliminado con exito"})
    } catch (error) {
      return res.status(400).json({msg:"Error",error})
              
    }
  });
  //
  export const editingList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, tarea, cantidad, precio } = req.body;
          
    // Convierte la cadena ID en un ObjectId
    const objectId = new ObjectId(id);
          
    // Utiliza el ObjectId en la actualización
    await ItaskModel.findByIdAndUpdate(objectId, {
      nombre,
      tarea,
      cantidad,
      precio
    });
        
    return res.status(200).json({ msg: 'Cambios realizados' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: 'Error', error });
  }
};

      
