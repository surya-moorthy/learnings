import express from "express"
import cors from "cors";
import { userRouter } from "./route/user";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/users",userRouter);


app.listen(3000);