import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const PORT = 5200;
const app = express();
const httpServer = createServer(app);

app.use(cors())
   .use(compression());

app.get('/', (req, res) => {
    res.send("Bienvenido a la academia");
})

httpServer.listen(PORT, () => {
    console.log(`Academia está online en http://localhost:${PORT}`)
})