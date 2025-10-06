
import express from "express";
import { z } from "zod";
import { prismClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
         res.status(411).json({
            msg: "Incorrect inputs"
        })
        return
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismClient.sum.create({
        data : {
            a :  parsedResponse.data.a,
            b :  parsedResponse.data.b,
            result : answer
        }
    })

    console.log(response);

    res.status(200).json({
        answer
    })
});

app.get("/sum",  (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            msg: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;



    res.json({
        answer
    })
});