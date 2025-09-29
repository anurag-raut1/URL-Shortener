import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import create_route from "./src/routes/shortUrl.routes.js";
import short_url_schema from "./src/models/shorturl.models.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";

dotenv.config("./.env");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) => res.send('Hello World!'))


app.use("/api/create",create_route)

app.get("/:id",redirectFromShortUrl)

app.listen(5000, () => {
        connectDB();
        console.log("Lisetning on http://localhost:5000/");
});