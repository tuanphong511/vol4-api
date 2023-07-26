"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnusController_1 = __importDefault(require("../controller/alumnusController"));
const alumnusRouter = (0, express_1.Router)();
alumnusRouter.get('/:score', alumnusController_1.default.findAll);
alumnusRouter.get('/', alumnusController_1.default.findByName);
alumnusRouter.post('/', alumnusController_1.default.add);
alumnusRouter.delete('/:id', alumnusController_1.default.delete);
alumnusRouter.put('/:id', alumnusController_1.default.update);
alumnusRouter.get('/:id', alumnusController_1.default.findById);
exports.default = alumnusRouter;
//# sourceMappingURL=alumnusRouter.js.map