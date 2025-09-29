import { findUrlFromShortUrl } from "../dao/saveShortUrl.js";
import { generateShortUrlService } from "../services/shortUrl.service.js";
// import { createNanoId } from "../utils/createNanoId";

export const createShortUrl=async(req,res)=>{
    const {url}=req.body;
    const shorturl= await generateShortUrlService(url);
    res.send(process.env.APP_URL+shorturl);
}

export const redirectFromShortUrl=async(req,res)=>{
    const {id}= req.params;
    const url= await findUrlFromShortUrl(id);
    if(url){
        res.redirect(url.full_url);
    }
    else res.status(404).send("not found");
}
