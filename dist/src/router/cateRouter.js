"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cateController_1 = __importDefault(require("../controller/cateController"));
const cateRouter = (0, express_1.Router)();
cateRouter.get('/', cateController_1.default.findAll);
cateRouter.post('/', cateController_1.default.add);
cateRouter.delete('/:id', cateController_1.default.delete);
cateRouter.put('/:id', cateController_1.default.update);
cateRouter.get('/:id', cateController_1.default.findById);
exports.default = cateRouter;
//# sourceMappingURL=cateRouter.js.map