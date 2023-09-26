"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    tarea: { type: String, required: true },
    cantidad: { type: String, required: true },
    precio: { type: String, required: true },
    completed: { type: Boolean, default: false },
});
exports.default = (0, mongoose_1.model)('Task', taskSchema);
