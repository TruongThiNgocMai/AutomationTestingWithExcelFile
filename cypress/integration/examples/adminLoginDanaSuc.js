/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
const login = require('../../fixtures/example.json')
const Excel = require('exceljs')
const FileSaver = require('file-saver')

//get current date
const fromDate = Cypress.moment().format("DD-MM-YYYY")

//=========================USING EXCELJS=========================

// Create workbook & add worksheet
const workbook = new Excel.Workbook()
// const worksheet = workbook.addWorksheet('CreateDispatch (' + fromDate + ')')

const sheetNames = ["Macbook_15_Screen", "Samsung_S10", "Iphone_6", "Iphone_6_plus"];

//============URL OF DANA TRAIN WEBSITE==============
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(login.usernameAD);
    cy.get('#password').click().type(login.passwordAD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with macbook-15 screen$/, function () {
    cy.get('.logo').should('be.visible')
    cy.get('.ant-menu-item').should('be.visible').should('have.text', 'Người dùng')
    cy.get('.rightHeader > .ant-avatar > img').should('be.visible')
    cy.get('.name').should('be.visible').should('have.text', 'Admin')
    cy.get('.role > span').should('be.visible').should('have.text', 'Khác')
    cy.get('.notification-section > .ant-btn').should('be.visible')
    cy.get('.cancel-button').should('be.visible')
    cy.get('.save-button').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport("samsung-s10");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(login.usernameGD);
    cy.get('#password').click().type(login.passwordGD);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with samsung-s10 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport("iphone-6");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(login.usernameVT);
    cy.get('#password').click().type(login.passwordVT);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with iphone-6 screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE-6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport("iphone-6+");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password$/, function () {
    cy.get('#username').click().type(login.usernameRC);
    cy.get('#password').click().type(login.passwordRC);
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with iphone-6 plus screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/"]').should('be.visible')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

And(/^I verify create data in excel file$/, function () {

    sheetNames.forEach(sheetName => {
        const worksheet = workbook.addWorksheet(sheetName);
        worksheet.state = 'visible';

        switch (worksheet) {
            case workbook.getWorksheet('Macbook_15_Screen'):
                worksheet.columns = [
                    { header: "Admin's username", key: 'username_AD' },
                    { header: "Admin's password", key: 'password_AD' },
                ];

                worksheet.addRow(
                    { username_AD: login.usernameAD, password_AD: login.passwordAD });
                break;

            case workbook.getWorksheet('Samsung_S10'):
                worksheet.columns = [
                    { header: "Giám đốc's username", key: 'username_GD' },
                    { header: "Giám đốc's password", key: 'password_GD' }
                ];

                worksheet.addRow(
                    { username_GD: login.usernameGD, password_GD: login.passwordGD });
                break;

            case workbook.getWorksheet('Iphone_6'):
                worksheet.columns = [
                    { header: "Văn thư's username", key: 'username_VT' },
                    { header: "Văn thư's password", key: 'password_VT' }
                ];

                worksheet.addRow(
                    { username_VT: login.usernameVT, password_VT: login.passwordVT });
                break;

            case workbook.getWorksheet('Iphone_6_plus'):
                worksheet.columns = [
                    { header: "Nhân viên's username", key: 'username_RC' },
                    { header: "Nhân viên's password", key: 'password_RC' }
                ];

                worksheet.addRow(
                    { username_RC: login.usernameRC, password_RC: login.passwordRC });
                break;

            default:
                text = "Export excel is failed";
        }
    })

    // save workbook to disk
    workbook.xlsx.writeBuffer()
        .then(buffer => FileSaver.saveAs(new Blob([buffer]), 'Data For Login [' + fromDate + ']' + '.xlsx'))
        .catch(err => console.log('Error writing excel export', err))
})