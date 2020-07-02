// data to check against
// const data = [
//     "id",
//     "config_sku",
//     "simple_sku",
//     "fallback_type",
//     "field",
//     "value",
//     "command"
// ];
// check for existence of the button on the ui and then click it
cy.get('[data-test-id=export-template-btn')
    .should("be.visible")
    .click();

// arbitrary wait so that the download can complete
// cy.wait(2000);
// // call the parseXlsx task we created above to parse the excel and return data as json
// cy.parseXlsx("/Users/Downloads/overrides-template.xlsx").then(
//     jsonData => {
//         // finally we write the assertion rule to check if that data matches the data we expected the excel file to have.
//         expect(jsonData[0].data[0]).to.eqls(data);
//     }
// );