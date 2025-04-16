import 'cypress-file-upload';


describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('DozzyOil.pdf')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload -- Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'DozzyOil.pdf', fileName: 'myfile.pdf' })
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it('File Upload -- Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('DozzyOil.pdf', {subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename').contains('DozzyOil.pdf')
    })

    it.only('Multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php ')
        cy.get('#filesToUpload').attachFile(['DozzyOil.pdf', 'MinoHealthReport.pdf'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it('File Upload- Shadow Dom', () => {

    })
})