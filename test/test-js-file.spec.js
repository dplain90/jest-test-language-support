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
        expect(sampleVariable).toBeTruthy()
        expect(sampleVariable).toContain('s')
        expect(sampleVariable).toBe()
        expect(sampleVariable).toMatchSnapshot()
    })
})