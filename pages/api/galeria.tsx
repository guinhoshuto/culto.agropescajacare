import type { NextApiRequest, NextApiResponse } from "next";
// import Contentful from "../services/contentful";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    
    const galeria = await client.getEntry('6wctVRNvKO4hZPBRmcCWdH')

    res.status(200).json({galeria: galeria})
}