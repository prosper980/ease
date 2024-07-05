import express, { Application, Request, Response } from "express"
import 'dotenv/config'
import cors from "cors"
import bodyParser from "body-parser";
import { adminRoutes } from "./routes/admin_routes/admin_routes";


const app: Application = express();

app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.POR || 3000;


app.use("/admin", adminRoutes)


app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
})