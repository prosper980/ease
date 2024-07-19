import express, { Application } from "express"
import 'dotenv/config'
import cors from "cors"
import bodyParser from "body-parser";
import { adminRoutes } from "./routes/admin_routes/admin-routes";
import cookieParser from "cookie-parser";


const app: Application = express();

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4173"]
}));
app.use(bodyParser.json())
app.use(cookieParser())
const PORT = process.env.PORT || 3000;


app.use("/admin", adminRoutes)


app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
})