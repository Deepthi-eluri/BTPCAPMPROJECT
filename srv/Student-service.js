const cds = require('@sap/cds')
var studentService = require('./EventHandler/studentService');

module.exports = cds.service.impl(async function(){
    studentService(this,cds);
})