import { Request, Response, Router } from "express";
import { UserModal } from "../db/db";

export const userRouter = Router();

type UserType = {
    username : string,
    email : string,
    password : string
}

userRouter.post("/create",async (req : Request,res : Response)=> {
    try {
        const user : UserType = req.body;

        // proper error validation

        const userResponse = await UserModal.create({
            username : user.username,
            email : user.email,
            password : user.password
        })

        // proper error validation
        
        res.status(200).json({
            message : "added successfully",
            userResponse
        })

    }catch(err) {
        res.status(500).json({
            message : " Internal Server Error",
            error : err
        })
    }
})

userRouter.get("/",async (req : Request,res : Response)=> {
    try {

        const users = await UserModal.find();

        res.json({
            users
        })

    }catch(err) {
        res.status(500).json({
            message : " Internal Server Error"
        })
    }
})

userRouter.delete("/delete",async (req : Request,res : Response)=> {
    try {
        const userId = req.query.id;

        const deleteResponse = await UserModal.findByIdAndDelete({
            _id : userId
        })

        res.status(200).json({
            deleteResponse,
            message : "deleted successfully"
        })

    }catch(err) {
        res.status(500).json({
            message : " Internal Server Error"
        })
    }
})