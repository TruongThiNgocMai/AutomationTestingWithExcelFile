const urlDanatrain = 'https://dana-train-web-admin-stg.enouvo.com/'

//--------------Function For Login Successfully to Dana Train Website---------------

Cypress.Commands.add('LoginDanaFunction', (username, password) => {
    cy.visit(urlDanatrain);
    cy.get('#username').click().type(username);
    cy.get('#password').click().type(password);
    cy.get('.ant-btn').click();
    cy.wait(3000);
})

//--------------Function For Upload A New Image/File---------------

Cypress.Commands.add('newUploadBlobFile', (fileName, fileType) => {
    cy.get("input[type='file']").then($input => {
        cy.fixture(fileName, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = $input[0];
                const testFile = new File([blob], fileName, { type: fileType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                return cy.wrap($input).trigger('change', { force: true });
            });
    });
    cy.wait(5000)
})

//Cause after create a new dispatch, manager account login recently so do not visit to url
Cypress.Commands.add('LoginDanaFunctionToCheckDispatch', (username, password) => {
    cy.get('#username').click().type(username);
    cy.get('#password').click().type(password);
    cy.get('.ant-btn').click();
    cy.wait(3000);
})

Cypress.Commands.add('LogoutDanaFunctionForWebMac', () => {
    //Cause have cy.reload() function, so we need handle click on X icon on the form to logout
    cy.get('.h4 > .anticon').click()
    cy.get('.ant-avatar').click()
    cy.get('.ant-dropdown-menu > :nth-child(3)').click();
})

Cypress.Commands.add('LogoutDanaFunctionForPhoneVT', () => {
    cy.get('[href="/profile"]').click()
    cy.get('.sc-fznOgF > .ant-btn').scrollIntoView().click()
    cy.get('.ant-popover-buttons > .ant-btn-primary').click()
})