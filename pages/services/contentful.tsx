import * as contentful from 'contentful'

export default class Contentful{
    constructor(){}

    client(){
        const client = contentful.createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
        });
        return client;

    }
}