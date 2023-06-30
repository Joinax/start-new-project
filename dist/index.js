"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routers/products-router");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const parserMiddleware = express_1.default.json();
app.use(parserMiddleware);
app.get('/', (req, res) => {
    res.send('Hello Samurai');
});
app.use('/products', products_router_1.productsRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
