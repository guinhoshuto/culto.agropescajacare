import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const headers = {
  headers: {
    "Authorization": process.env.TWITCH_TOKEN!, 
    "Client-Id": process.env.TWITCH_CLIENT_ID!
  }
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    const url = "https://api.twitch.tv/helix/videos?user_id=546486945&limit=1000"
    axios.get(url, headers)
    .then(data => {
        // const videos = data.data.data.filter(video => video.)
        console.log(data.data.data)
    })

    res.status(200).json({})
}