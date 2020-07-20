/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";

const jsFile = require('./../../fixtures/testdata [20-07-2020].json')
//============URL OF DANA TRAIN WEBSITE==============
const url = 'https://dana-train-web-admin-stg.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
    cy.viewport("macbook-15");
});

Given(/^I navigate to Dana train login page$/, function () {
    cy.visit(url);
});

When(/^I input valid data to username and password with macbook-15 screen$/, function () {
    const ADusername = jsFile[1].GD_username
    const ADpassword = jsFile[1].GD_password
    cy.get('#username').click().type(ADusername)
    cy.get('#password').click().type(ADpassword)
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with macbook-15 screen$/, function () {
    cy.get('.logo').should('be.visible')
    cy.get('[title="Công văn đến/đi"]').should('be.visible').should('have.text', 'Công văn đến/đi')
    cy.get('[title="Tin nhắn nội bộ"]').should('be.visible').should('have.text', 'Tin nhắn nội bộ')
    cy.get('[title="Thông báo"]').should('be.visible').should('have.text', 'Thông báo')
    cy.get('[title="Tủ tài liệu"]').should('be.visible').should('have.text', 'Tủ tài liệu')
    cy.get('.fullLogo').should('be.visible')
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

When(/^I input valid data to username and password with samsung-s10 screen$/, function () {
    const VTusername = jsFile[0].VT_username
    const VTpassword = jsFile[0].VT_password
    cy.get('#username').click().type(VTusername)
    cy.get('#password').click().type(VTpassword)
})


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

When(/^I input valid data to username and password with iphone-6 screen$/, function () {
    const TPusername = jsFile[2].TP_username
    const TPpassword = jsFile[2].TP_password
    cy.get('#username').click().type(TPusername)
    cy.get('#password').click().type(TPpassword)
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

When(/^I input valid data to username and password with iphone-6 plus screen$/, function () {
    const NVusername = jsFile[3].NV_username
    const NVpassword = jsFile[3].NV_password
    cy.get('#username').click().type(NVusername)
    cy.get('#password').click().type(NVpassword)
});

And(/^I click on Login button at Dana train$/, function () {
    cy.get('.ant-btn').click();
});

Then(/^I verify login successfully into Dana train website with iphone-6 plus screen$/, function () {
    cy.get('.title').should('be.visible').should('have.text', 'Darsitec')
    cy.get('a > .sc-AxhCb > .normalTitle').should('be.visible').should('have.text', 'Trang cá nhân')
    cy.get('[href="/notifications"]').should('be.visible')
    cy.get('[href="/profile"]').should('be.visible')
});

