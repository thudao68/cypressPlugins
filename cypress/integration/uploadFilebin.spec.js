describe('File upload and download tests', () => {
    
    it('Upload file and download it in Zip format', () => {
        cy.visit('https://filebin.net/')
        cy.get('#fileField').attachFile('fileToUpload')
        cy.contains('This bin contains 1 file',).should('be.visible')
    })
    
})