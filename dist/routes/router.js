"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo está bien'
    });
});
router.post('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo bien con POST'
    });
});
exports.default = router;
