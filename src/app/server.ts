import dotenv from "dotenv";
import express from "express";
import router from "./routes/UserRoutes.js";

dotenv.config();

const app = express();
app.use("/user", router);

const PORT = process.env.DOOR;

app.use(express.json());
app.listen(PORT, () => {
	console.log("Servidor rodando na porta " + PORT);
});
