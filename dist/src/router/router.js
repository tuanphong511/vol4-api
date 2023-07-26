"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const studentRouter_1 = __importDefault(require("./studentRouter"));
const alumnusRouter_1 = __importDefault(require("./alumnusRouter"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('/students', studentRouter_1.default);
router.use('/alumnus', alumnusRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map