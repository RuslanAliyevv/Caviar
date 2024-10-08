import axios from "axios";
import { log } from "console";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const { id } = req.params;
  console.log("serverside");
  console.log(id);
  if (req.method === "GET") {
    try {
      const backendResponse = await axios.get(
        `http://167.71.86.5:3000/products/${id}`
      );
      console.log(backendResponse.data);
      res.status(200).json(backendResponse.data);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
