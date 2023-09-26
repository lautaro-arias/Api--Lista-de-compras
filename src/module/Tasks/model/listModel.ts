import mongoose, { Schema, model } from 'mongoose';
import {Itask} from './listInterfaz'

export const ItaskModel = mongoose.model('Task',new Schema<Itask> ({
    nombre      :   { type: String,required: true },
    tarea       :   { type: String,required: true},
    cantidad    :   { type: String,required: true},
    precio      :   { type: String,required: true},
    completed   :   { type: Boolean,default: false},
}))

