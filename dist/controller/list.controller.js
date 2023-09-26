"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editingList = exports.deliting = exports.listing = exports.newTasks = exports.create = void 0;
const list_1 = __importDefault(require("../models/list"));
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
exports.create = ((req, res) => {
    try {
        return res.status(200).json({ msg: "ko" });
    }
    catch (error) {
        return res.status(400).json({ msg: "Error al crear tarea", error });
    }
});
exports.newTasks = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, tarea, cantidad, precio, completed, id } = req.body;
        const newTask = new list_1.default({ nombre, tarea, cantidad, precio, completed, id });
        yield newTask.save();
        console.log(newTask.save());
        console.log(newTask);
        return res.status(201).json(newTask);
    }
    catch (error) {
        return res.status(400).json({ msg: "Error al agregar una nueva  tarea", error });
    }
}));
exports.listing = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield list_1.default.find();
        return res.status(200).json(tasks);
    }
    catch (error) {
        return res.status(400).json({ msg: "Error al mostrar el listado", error });
    }
}));
exports.deliting = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield list_1.default.findByIdAndDelete(id);
        return res.status(200).json({ msg: "Eliminado con exito" });
    }
    catch (error) {
        return res.status(400).json({ msg: "Error", error });
    }
}));
const editingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, tarea, cantidad, precio } = req.body;
        console.log("CONTENIDO DEL BODY", req.body);
        // Convierte la cadena ID en un ObjectId
        const objectId = new ObjectId(id);
        yield list_1.default.findByIdAndUpdate(objectId, { nombre, tarea, cantidad, precio, id });
        console.log("RESOUESTA DEL SERVIDOR ", objectId, { nombre, tarea, cantidad, precio, id });
        return res.status(200).json({ msg: 'Cambios realizados' });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ msg: 'Error', error });
    }
});
exports.editingList = editingList;
