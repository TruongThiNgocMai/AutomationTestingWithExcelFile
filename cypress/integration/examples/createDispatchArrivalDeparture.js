import { Given } from "cypress-cucumber-preprocessor/steps";

const createDispatch = require('../../fixtures/example.json')
// const xlsx = require("xlsx")
const Excel = require('exceljs')
const FileSaver = require('file-saver')

/// <reference types="cypress" />

//================CREATE DISPATCH ARRIVAL DEPARTURE WITH MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15")
});

Given(/^I login successfully to Dana train Page with dispatch account$/, function () {
    cy.LoginDanaFunction(createDispatch.usernameVT, createDispatch.passwordVT)
});

When(/^I click on dispatch arrival and departure$/, function () {
    cy.get('[title="Công văn đến/đi"]').click()
});

And(/^I click on Create dispatch button$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose propertie for dispatch$/, function () {
    cy.get('.sc-fzoant > [form="[object Object]"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #priority > .ant-select-selection').click()
    cy.xpath("//li[@class='ant-select-dropdown-menu-item']").click()
});

And(/^I input from number for dispatch$/, function () {
    cy.get('#fromNumber').type(createDispatch.fromNumber)
});

And(/^I input source number for dispatch$/, function () {
    cy.get('#sourceNumber').type(createDispatch.sourceNumber)
});

And(/^I input publisher for dispatch$/, function () {
    cy.get('#publisher').type(createDispatch.publisher)
});

And(/^I input title for dispatch$/, function () {
    cy.get('#title').type(createDispatch.title)
});

And(/^I input content for dispatch$/, function () {
    cy.get('#content').type(createDispatch.contentdemo)
});

And(/^I choose people handling for dispatch$/, function () {
    cy.get(':nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//a[contains(text(),'Super Giám')]").click()
});

And(/^I choose the file attach for dispatch/, function () {
    cy.newUploadBlobFile('files/Smartos-Flow-User.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
});

And(/^I click on Create dispatch button to save dispatch$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

Then(/^I verify create a new dispatch successfully with macbook-15 screen$/, function () {
    cy.reload()
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(2).should('contain.text', createDispatch.title)
            cy.get('td').eq(5).should('contain.text', createDispatch.fromNumber)
        });
});

And(/^I verify user logout successfully with dispatch account$/, function () {
    cy.LogoutDanaFunctionForWebMac()
});

And(/^I login successfully to Dana train Page with manager account to check the dispatch have sent$/, function () {
    cy.LoginDanaFunctionToCheckDispatch(createDispatch.usernameGD, createDispatch.passwordGD)
    cy.get('.notification-section > .ant-btn').click()
    cy.xpath("//div[@class='sc-fznZeY jlXzwO list-noti']//div[1]//div[1]//div[1]//div[2]//strong[1]").should('have.text', createDispatch.title)

    //get current date
    const fromDate = Cypress.moment().format("DD-MM-YYYY")

    //     //=====================USING XLSX========================
    //     //create a new workbook - an excel file
    //     const newWB = xlsx.utils.book_new();

    //     //get data
    //     const ws_data = [[createDispatch.usernameVT, createDispatch.passwordVT, createDispatch.usernameGD, createDispatch.passwordGD]];

    //     //converts an array of JS objects to a worksheet
    //     const newWS = xlsx.utils.json_to_sheet(ws_data);

    //     //save into excel with sheetname and datetime
    //     xlsx.utils.book_append_sheet(newWB, newWS, "P" + " {" + fromDate + "}");

    //     //name of excel file
    //     xlsx.writeFile(newWB, "P.xlsx");
    // })
    //=========================USING EXCELJS=========================

    // Create workbook & add worksheet
    const workbook = new Excel.Workbook()
    const worksheet = workbook.addWorksheet('ExampleSheet [' + fromDate + ']')

    // add column headers
    worksheet.columns = [
        { header: 'UserNameVT', key: 'userName_VT' },
        { header: 'PasswordVT', key: 'password_VT' },
        { header: 'FromNumber', key: 'from_Number' },
        { header: 'SourceNumber', key: 'source_Number' },
        { header: 'Publisher', key: 'publisher' },
        { header: 'Title', key: 'title_Dispatch' },
        { header: 'Contentdemo', key: 'content_demo' },
        { header: 'UsernameGD', key: 'username_GD' },
        { header: 'PasswordGD', key: 'password_GD' },

    ];

    // Add row using key mapping to columns
    worksheet.addRow(
        {
            userName_VT: createDispatch.usernameVT, password_VT: createDispatch.passwordVT,
            from_Number: createDispatch.fromNumber, source_Number: createDispatch.sourceNumber,
            publisher: createDispatch.publisher, title_Dispatch: createDispatch.title,
            content_demo: createDispatch.contentdemo, username_GD: createDispatch.usernameGD,
            password_GD: createDispatch.passwordGD
        }
    );

    // save workbook to disk
    workbook.xlsx.writeBuffer()
        .then(buffer => FileSaver.saveAs(new Blob([buffer]), 'newfile.xlsx'))
        .catch(err => console.log('Error writing excel export', err))
})



