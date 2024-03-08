import axios from "axios";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  console.log(req.body);
  if (req.method === "GET") {
    try {
      const backendResponse = await axios.get(
        "http://167.71.86.5:3000/products/"
      );
      res.status(200).json(backendResponse.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
