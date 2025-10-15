    import {describe,it,expect,vi} from "vitest";
    import request from "supertest";
    import {app} from "../index";
    import {prismaClient} from "../__mocks__/db"

    vi.mock("../db")

    describe("POST /sum",()=> {
        it("should return the sum of the two numbers",async ()=> {

            prismaClient.result.create.mockResolvedValue({
                id : 1,
                a : 2,
                b : 2 ,
                answer : 4,
                type : "Sum"
            })

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
            expect(res.body.message).toBe("Incorrect inputs");
        })
    })

    describe("POST /multiply",()=> {
        it("should return the multiply of the two numbers",async ()=> {
            const res = await request(app).post("/multiply").send({
                a : 1,
                b : 2
            })

            expect(res.statusCode).toBe(200);
            expect(res.body.answer).toBe(3);
        })

        it("should return an error for having incorrect inputs",async ()=> {
            const res = await request(app).post("/multiply").send({
                a : 1,
                b : ['pweogep']
            })

            expect(res.statusCode).toBe(411);
            expect(res.body.message).toBe("Incorrect inputs");
        })
    })

