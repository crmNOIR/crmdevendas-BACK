import express from "express";
import dotenv from "dotenv";
import logMiddleware from "./middlewares/logs";
import router from "./api/routes/index";

dotenv.config();
const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use(router);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.json({message: "Hello, world!"})
})
