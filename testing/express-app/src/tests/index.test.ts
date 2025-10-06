import {describe,it,expect} from "@jest/globals";
import request from "supertest";
import {app} from "../index";

describe("POST /sum",()=> {
    it("should return the sum of the two numbers",async ()=> {
        const res = await request(app).post("/sum").send({
            a : 1,
            b : 2
        })

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })

    it("should return an error for having incorrect inputs",async ()=> {
        const res = await request(app).post("/sum").send({
            a : 1,
            b : ['pweogep']
        })

        expect(res.statusCode).toBe(411);
        expect(res.body.msg).toBe("Incorrect inputs");
    })
})

describe("Get /sum",()=> {
    it("should return the sum of the two numbers",async ()=> {
        const res = await request(app).get("/sum").set({
            a : String(1),
            b : String(2)
        }).send()

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })

    it("should return an error for having incorrect inputs",async ()=> {
          const res = await request(app).get("/sum").set({
            a : String("r410u51-u"),
            b : String(2)
        }).send()

        expect(res.statusCode).toBe(411);
        expect(res.body.msg).toBe("Incorrect inputs");
    })
})
