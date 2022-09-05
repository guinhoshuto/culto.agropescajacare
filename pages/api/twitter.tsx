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
    const url = "https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1565054846956445697&tweet.fields=in_reply_to_user_id,author_id,created_at,conversation_id&max_results=100&sort_order=recency"
    axios.get(url, headers)
    .then(data => {
        const thread = data.data.data.filter((t:any ) => t.author_id === '3038290799' && t.in_reply_to_user_id === '3038290799')
        console.log(data.data.data)
        res.status(200).json({thread: thread})
    })

}