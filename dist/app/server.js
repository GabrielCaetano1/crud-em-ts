dotenv.config();
import dotenv from 'dotenv';
import express from 'express';
const app = express();
const port = process.env.DOOR;
app.use(express.json());
app.listen(3500, () => {
    console.log("Servidor rodando na porta " + port);
});
