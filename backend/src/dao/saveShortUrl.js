import short_url_schema from "../models/shorturl.models.js";


export const saveShortUrl=async(url,n_url)=>{
    const newurl=new short_url_schema({
        full_url:url,
        short_url:n_url
    })
    await newurl.save();
}

export const findUrlFromShortUrl=async(id)=>{
    return await short_url_schema.findOneAndUpdate({short_url:id},{$inc:{clicks:1}})
}