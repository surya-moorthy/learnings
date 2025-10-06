import {describe,expect,it,test} from "@jest/globals"
import {sum,multiply} from "../index"

describe('sum', ()=> {
    it('adds 1 + 2 equals 3', ()=> {
       expect(sum(1,2)).toBe(3)
    })
})

describe('multiply', ()=> {
    it('multiplies 1 and 3 to be expect 3',()=> {
        expect(multiply(1,3)).toBe(3)
    })
})