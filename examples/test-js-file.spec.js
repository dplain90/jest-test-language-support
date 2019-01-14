
// These are for use in the extension debugger only to check scope changes 
describe('sample jest test syntax', () => {
    let sampleVariable
    beforeAll(() => {
        sampleVariable = 'sample'        
    })

    afterAll(() => {

    })
    beforeEach(() => {

    })

    afterEach(() => {

    })

    it('sample it block', () => {
        expect(sampleVariable).not.toBeTruthy()
        expect(sampleVariable.length < 3).toBe(false)
        expect(sampleVariable).toMatchSnapshot()
    })
})