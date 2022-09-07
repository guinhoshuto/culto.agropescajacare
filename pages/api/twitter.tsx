import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const headers = {
  headers: {
    "Authorization": process.env.TWITTER_TOKEN!, 
  }
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    const url = "https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1565054846956445697&expansions=attachments.media_keys&media.fields=url&tweet.fields=in_reply_to_user_id,author_id,created_at,conversation_id,attachments&max_results=99&sort_order=recency"
    axios.get(url, headers)
    .then(data => {
        const thread = data.data.data.filter((t:any ) => t.author_id === '3038290799'  && t.in_reply_to_user_id === '3038290799')
        console.log(thread)
        const includes = data.data.includes.media;

        // res.status(200).json({thread: thread})
        thread.forEach((tweet: any) => {
          if(tweet.hasOwnProperty('attachments')){
            tweet.media_url = includes.find((media:any) => tweet.attachments.media_keys[0] === media.media_key).url
          }
        })
        res.status(200).json({thread: thread})
    })
    .catch(e => {
      res.status(400).json({thread: {}})
    })
}