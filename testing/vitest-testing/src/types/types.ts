import z from "zod"
export const sumInput = z.object({
    a : z.number(),
    b : z.number()
})