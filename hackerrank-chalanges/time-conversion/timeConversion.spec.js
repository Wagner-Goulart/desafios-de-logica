const timeConversion = require("./timeConversion.js");

describe('Date Conversion', ()=>{
    it('Should convert from AM to 24H format', ()=>{
       const date = timeConversion('00:00:01AM')
       
       expect(date).toBe('00:00:01')
    })

    it('Should convert PM to 24H', ()=> {
        const date = timeConversion("01:00:00pm")

        expect(date).toBe('13:00:00')
    })
})