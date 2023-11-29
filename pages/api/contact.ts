import axios from 'axios';
import {Request, Response} from "express";

export default async function handler(req:Request, res:Response) {
    console.log(req.body)
    if (req.method === 'POST') {
        try {
            const backendResponse = await axios.post('http://ec2-18-130-240-204.eu-west-2.compute.amazonaws.com:3000/contact/form', {
                "name": req.body.name,
                "email": req.body.email,
                "message": req.body.message,
                "is_open": true
            });
                res.status(200).json(backendResponse.data);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
