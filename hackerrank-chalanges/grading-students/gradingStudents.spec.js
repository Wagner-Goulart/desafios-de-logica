const { gradingStudents} = require('./gradingStudents')

describe('grading Student', ()=> {
    
    it('Should not round de grade if < 38', ()=>{
        expect(gradingStudents([35])).toStrictEqual([35])
    })

    it('Should round de grade if multiple of five and diference < 3', ()=>{
        expect(gradingStudents([38, 40, 58])).toStrictEqual([40, 40, 60])
    })

    it('Should not round de grade if multiple of five and diference > 3', ()=>{
        expect(gradingStudents([46, 56, 66])).toStrictEqual([46, 56, 66])
    })
})