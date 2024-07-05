sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.studentapp.studentapplication.controller.StudentInfo", {
            onInit: function () {

            },
            getCompleteStudentDetails: function () {
                var oModel = this.getView().getModel("studentModel");
                let urlgetdata = "/odata/v4/student/Students"
                let result = []
                $.ajax({
                    url: urlgetdata,
                    dataType: "json",
                    success: function (data) {
                        result = data.value
                        oModel.setProperty("/StudentData", result)
                    },
                    error: function (error) {
                        console.log(error)
                    }
                })

            },
            UpdateStudentData: function () {
                var oModel = this.getView().getModel("studentModel");
                var studentId = oModel.getProperty("/StudentInputSecondPage");
                var updatedfee = oModel.getProperty("/StudentOutputSecondPage");
                var payload = {
                    "fee_paid": updatedfee
                }
                let url = "/odata/v4/student/StudentFees"
                let updateUrl = "(Student_id='" + studentId + "')"
                $.ajax({
                    url: url + updateUrl,
                    contentType: "application/json",
                    type: "PATCH",
                    data: JSON.stringify(payload),
                    dataType: "json",
                    success: function (oResult) {
                        console.log("Updated successfully");
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            CreateStudent: function () {
                var oModel = this.getView().getModel("studentModel");
                var studentId = oModel.getProperty("/newStudentId");
                var studentFee = oModel.getProperty("/newStudentfees");
                var feePayload = {
                    "Student_id": studentId,
                    "fee_paid": studentFee
                }
                let feeurl = "/odata/v4/student/StudentFees"
                $.ajax({
                    url: feeurl,
                    contentType: "application/json",
                    type: "POST",
                    data: JSON.stringify(feePayload),
                    dataType: "json",
                    success: function (oResult) {
                        console.log("Created successfully");
                    },
                    error: function (oError) {
                        console.log("Please pay the fees");
                    }
                })
                let url = "/odata/v4/student/Students"
                var payload = {
                    "Student_id": studentId,
                } 
                $.ajax({
                    url: url,
                    contentType: "application/json",
                    type: "POST",
                    data: JSON.stringify(payload),
                    dataType: "json",
                    success: function (oResult) {
                        console.log("Created successfully");
                    },
                    error: function (oError) {
                        console.log("Please pay the fees");
                    }
                })
            },
            DeleteStudent: function(){
                var oModel = this.getView().getModel("studentModel");
                var studentId = oModel.getProperty("/deleteStudentId");
                var payload = {
                    "Student_id": studentId
                }
                let url = "/odata/v4/student/Students"
                let deleteUrl = "(Student_id='" + studentId + "')"
                $.ajax({
                    url: url +deleteUrl,
                    contentType: "application/json",
                    type: "DELETE",
                    data: JSON.stringify(payload),
                    dataType: "json",
                    success: function (oResult) {
                        console.log("Deleted successfully");
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            }

        });
    });
