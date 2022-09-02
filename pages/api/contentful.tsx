import type { NextApiRequest, NextApiResponse } from "next";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// const Fields = { productName: Contentful.EntryFields.Text }
// const Locales = 'en-US' | 'de-DE';
// const entry = client.withAllLocales.getEntry<Fields, Locales>('some-entry-id') 

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
){
    const entries = await client.getEntries({
        content_type: "fieis",
        // order: "-sys.createdAt, sys.id"
    })
    console.log(entries.items)

    res.status(200).json({members: entries.items})
}