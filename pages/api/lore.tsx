import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
      
// curl --request GET \ --url 'https://api.twitter.com/2/tweets?ids=1225917697675886593&tweet.fields=author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets&expansions=author_id,in_reply_to_user_id,referenced_tweets.id&user.fields=name,username' \
  // --header 'Authorization: Bearer $BEARER_TOKEN' 

    

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    // const url = "https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1565054846956445697&tweet.fields=in_reply_to_user_id,author_id,created_at,conversation_id&max_results=100&sort_order=recency"
    // axios.get(url, headers)
    // .then(data => {
    //     // const videos = data.data.data.filter(video => video.)
    //     console.log(data.data.data)
    // })

    res.status(200).json({})
}