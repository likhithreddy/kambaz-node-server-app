import express from 'express';
import Hello from "./Hello.js";
import cors from "cors";
import Lab5 from "./Lab5/index.js";

const app = express()
app.use(cors());
app.use(express.json());
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)