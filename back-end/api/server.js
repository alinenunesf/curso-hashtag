import express from 'express';
import { db } from './connect.js';
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());


app.get('/', (request, response) => {
    response.send('Hello World! Nao preciso mais atualizar'); 
});
app.get('/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
});
app.get('/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray()); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});