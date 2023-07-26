"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classRoomController_1 = __importDefault(require("../controller/classRoomController"));
const classRoomRouter = (0, express_1.Router)();
classRoomRouter.get('/', classRoomController_1.default.findAll);
classRoomRouter.post('/', classRoomController_1.default.add);
classRoomRouter.delete('/:id', classRoomController_1.default.delete);
classRoomRouter.put('/:id', classRoomController_1.default.update);
classRoomRouter.get('/:id', classRoomController_1.default.findById);
exports.default = classRoomRouter;
//# sourceMappingURL=classRoomRouter.js.map