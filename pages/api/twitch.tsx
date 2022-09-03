import type { NextApiRequest, NextApiResponse } from "next";

const header = {
    
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    res.status(200).json({})
}