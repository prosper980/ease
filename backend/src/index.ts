import express, { Application,Request, Response } from "express"
import 'dotenv/config'


const app : Application = express();

const PORT = process.env.POR || 3000;


app.get('/', (req : Request, res : Response) => {
    res.json({username : "John doe"});
    console.log(req.url);

})
app.get('/user', (req : Request, res : Response) => {
    console.log(req.url);
    res.send("Hello");
})


app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
})