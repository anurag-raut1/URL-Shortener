import { createNanoId } from "../utils/createNanoId.js";
// import short_url_schema from "../models/shorturl.models.js";
import { saveShortUrl } from "../dao/saveShortUrl.js";

export const generateShortUrlService=async(url)=>{
    console.log(url);
    const n_url=createNanoId(7);
    await saveShortUrl(url,n_url);
    return(n_url);
}