sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.studentapp.studentapplication.controller.Home", {
        onInit: function () {

        },
        getStudentData: function()
        {
            let oModel = this.getView().getModel("studentModel");
            let studentInput= oModel.getProperty("/studentInput");
            let result= ""
            let urlgetData="/odata/v4/student/Transport"
            let filterUrl= "?$filter=Student_id eq '" + studentInput +"'"
            
            $.ajax({
                url: urlgetData+filterUrl,
                dataType:"json",
                success: function(data){
                    result=data.value[0].Busnumber
                    oModel.setProperty("/studentOutput",result);
                },
                error: function(error){
                    console.log(error);
                }
            });
        },
        onNavigatetoStudentPage: function()
            {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteStudentInfo",true);
            },
            onNavigateToStudentPageSmartControls: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteStudentInfoDisplaySmart",true); 
            }
    });
});
