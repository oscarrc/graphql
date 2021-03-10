import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();
const httpServer = createServer(app);
const port = 5200;

app.use(cors())
   .use(compression());

app.get('/', (req, res) => {
    res.send("Bienvenido a la academia");
})

httpServer.listen(port, () => {
    console.log(`Academia está online en http://localhost:${port}`)
})