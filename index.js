import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todosRoutes.js'

const app = express();
dotenv.config();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use('/todos', todosRoutes);

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then (() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    console.log(`Server is running ${PORT}`)
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send("Welcome to server");
});
