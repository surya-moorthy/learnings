import express from "express"
import { sumInput } from "./types/types";

export const app = express();
app.use(express.json());

app.post("/sum",(req,res)=> {
    
    const response = sumInput.safeParse(req.body);

    if(!response.success) {
        return res.status(411).json({
            msg : "Incorrect inputs"
        })
        
    }
    const {a,b} = response.data;
    const answer = a + b;

    res.status(200).json({
        answer
    })
})

app.get("/sum", (req, res) => {
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

