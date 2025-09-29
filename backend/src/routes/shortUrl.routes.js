import express from "express"
import { createShortUrl } from "../controller/shortUrl.controller.js";
const create_route= express.Router();

create_route.post("/",createShortUrl);

export default create_route;