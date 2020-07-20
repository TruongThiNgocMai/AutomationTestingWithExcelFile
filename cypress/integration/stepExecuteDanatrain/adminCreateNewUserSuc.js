import { Given } from "cypress-cucumber-preprocessor/steps";
const createUser = require('./../../fixtures/example.json')
/// <reference types="cypress" />

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const username_VT = makeid(5) + createUser.usernameVT;
const fullname_VT = makeid(5) + createUser.fullnameVT;
const email_VT = makeid(5) + createUser.emailVT;
const password_VT = makeid(5) + createUser.passwordVT;

const username_GD = makeid(5) + createUser.usernameGD;
const fullname_GD = makeid(5) + createUser.fullnameGD;
const email_GD = makeid(5) + createUser.emailGD;
const password_GD = makeid(5) + createUser.passwordGD;

const username_TP = makeid(5) + createUser.usernameTP;
const fullname_TP = makeid(5) + createUser.fullnameTP;
const email_TP = makeid(5) + createUser.emailTP;
const password_TP = makeid(5) + createUser.passwordTP;

const username_NV = makeid(5) + createUser.usernameNV;
const fullname_NV = makeid(5) + createUser.fullnameNV;
const email_NV = makeid(5) + createUser.emailNV;
const password_NV = makeid(5) + createUser.passwordNV;

var DataTest = [
    {
        "VT_username": username_VT,
        "VT_fullname": fullname_VT,
        "VT_email": email_VT,
        "VT_password": password_VT
    },
    {
        "GD_username": username_GD,
        "GD_fullname": fullname_GD,
        "GD_email": email_GD,
        "GD_password": password_GD
    },
    {
        "TP_username": username_TP,
        "TP_fullname": fullname_TP,
        "TP_email": email_TP,
        "TP_password": password_TP
    },
    {
        "NV_username": username_NV,
        "NV_fullname": fullname_NV,
        "NV_email": email_NV,
        "NV_password": password_NV
    }
]

//================CREATE A NEW USER SUCCESSFULLY ON MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen 1$/, function () {
    cy.viewport('macbook-15')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on user page$/, function () {
    cy.get('.ant-menu-item').click()
});

Then(/^I verify create a new user successfully with macbook-15 screen$/, function () {
    cy.reload()
    cy.xpath("//div[@class='ant-table-scroll']//tbody[@class='ant-table-tbody']//tr[1]")
        .within(function () {
            cy.get('td').eq(0).should('contain.text', fullname_VT)
            cy.get('td').eq(1).should('contain.text', username_VT)
            cy.get('td').eq(2).should('contain.text', email_VT)
            cy.get('td').eq(5).should('have.text', 'Hoạt động')
        })
});

Then(/^I login with user's account create recently successfully with macbook-15 sreen$/, function () {
    cy.LoginDanaFunctionToCheck(username_VT, password_VT)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username for Van Thu account$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(username_VT)
});

And(/^I input fullname for Van Thu account$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(fullname_VT)
});

And(/^I input email for Van Thu account$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(email_VT)
});

And(/^I input department for Van Thu account$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng Kinh doanh')]").click()
});

And(/^I input position for Van Thu account$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'n Th')]").click()
});

And(/^I input password for Van Thu account$/, function () {
    cy.get('#password').type(password_VT)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the mac size$/, function () {
    cy.LogoutDanaFunctionForWebMac()
});

And(/^I click on create button to save a new user$/, function () {
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON SAMSUNG-S10 SCREEN==================
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
    cy.viewport('samsung-s10')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with samsung-s10 screen$/, function () {
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[1]').should('contain.text', fullname_GD)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[2]').should('contain.text', username_GD)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]').should('contain.text', email_GD)
    cy.xpath('//div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', 'Hoạt động')
})

Then(/^I login with user's account create recently successfully with samsung-s10 screen$/, function () {
    cy.LoginDanaFunctionToCheck(username_GD, password_GD)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
    cy.wait(5000)
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username for Giam Doc account$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(username_GD)
});

And(/^I input fullname for Giam Doc account$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(fullname_GD)
});

And(/^I input email for Giam Doc account$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(email_GD)
});

And(/^I input department for Giam Doc account$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng TCHC')]").click()
});

And(/^I input position for Giam Doc account$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//div[contains(@class,'ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-topLeft')]//li[1]").click()
});

And(/^I input password for Giam Doc account$/, function () {
    cy.get('#password').type(password_GD)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    // cy.get('.btn-back').click()
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON IPHONE-6 SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
    cy.viewport('iphone-6')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with iphone-6 screen$/, function () {
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[1]').should('contain.text', fullname_TP)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[2]').should('contain.text', username_TP)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]').should('contain.text', email_TP)
    cy.xpath('//div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', 'Hoạt động')
});

Then(/^I login with user's account create recently successfully with iphone-6 screen$/, function () {
    cy.LoginDanaFunctionToCheck(username_TP, password_TP)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user for Truong Phong account$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username for Truong Phong account$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(username_TP)
});

And(/^I input fullname for Truong Phong account$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(fullname_TP)
});

And(/^I input email for Truong Phong account$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(email_TP)
});

And(/^I input department for Truong Phong account$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'p TTTH Bình Tr')]").click()
});

And(/^I input position for Truong Phong account$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'ng Phòng')]").click()
});

And(/^I input password for Truong Phong account$/, function () {
    cy.get('#password').type(password_TP)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});


And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I logout user successfully$/, function () {
    cy.get('.h4 > .anticon').click()
    cy.LogoutDanaVTFunction()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    // cy.get('.btn-back').click()
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

//================CREATE A NEW USER SUCCESSFULLY ON IPHONE-6 PLUS SCREEN==================
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
    cy.viewport('iphone-6+')
});

Given(/^I login successfully to Dana train Page$/, function () {
    cy.LoginDanaFunction(createUser.usernameAD, createUser.passwordAD)
});

When(/^I click on home icon$/, function () {
    cy.get('[href="/"]').click()
});

Then(/^I verify create a new user successfully with iphone-6 plus screen$/, function () {
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[1]').should('contain.text', fullname_NV)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[2]').should('contain.text', username_NV)
    cy.xpath('//div[4]/div[1]/div[1]/div/div/div/div[1]/div/div/div/div/div[3]').should('contain.text', email_NV)
    cy.xpath('//div/div/div/div[1]/div/div/div/div/div[6]/span').should('have.text', 'Hoạt động')
});

Then(/^I login with user's account create recently successfully with iphone-6 plus screen$/, function () {
    cy.LoginDanaFunctionToCheck(username_NV, password_NV)
});

And(/^I click on create button to create a new user$/, function () {
    cy.get('.vActions > .ant-btn').click()
});

And(/^I choose image for user$/, function () {
    cy.newUploadBlobFile('images/avatar.jpg', 'image/jpeg')
    cy.get('.ant-modal-footer > .ant-btn').click()
})

And(/^I input username for Nhan Vien account$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #userName').type(username_NV)
});

And(/^I input fullname for Nhan Vien account$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #name').type(fullname_NV)
});

And(/^I input email for Nhan Vien account$/, function () {
    cy.get('.form-section > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #email').type(email_NV)
});

And(/^I input department for Nhan Vien account$/, function () {
    cy.get('.form-section > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Phòng KT&AT')]").click()
});

And(/^I input position for Nhan Vien account$/, function () {
    cy.get('.form-section > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-fznzOf > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Nhân Viên')]").click()
});

And(/^I input password for Nhan Vien account$/, function () {
    cy.get('#password').type(password_NV)
});

And(/^I choose access create notification$/, function () {
    cy.get('#isCanAddAnnouncement').click()
});

And(/^I logout user successfully in the phone size$/, function () {
    cy.LogoutDanaFunctionForPhone()
});

And(/^I logout user successfully$/, function () {
    cy.get('.h4 > .anticon').click()
    cy.LogoutDanaVTFunction()
});

And(/^I click on create button to save a new user in phone size$/, function () {
    //When use want to click on back button to avoid duplicate data, you can use this 
    // cy.get('.btn-back').click()
    cy.get('.sc-fzolEj > .ant-btn-primary').click()
});

And(/^I verify write data to excel file successfully$/, function () {
    cy.writeDataFromArrayToExcel(DataTest)
});

And(/^I verify save file with format json file successfully$/, function () {
    cy.writeDataFromArrayToJson(DataTest)
});