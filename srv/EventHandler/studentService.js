var registerStudentHandler = function(that,cds){
 

    that.before('READ', 'Students', async req =>{
        console.log("Enter function")
    })

    that.before('CREATE', 'Students', async req =>{
        console.log("Enter before condition")
        let inputStudentid= req.data.Student_id
        let datainstudentfees= await SELECT.from('btpcapmproject_StudentFees').where({Student_id:inputStudentid})
        if(datainstudentfees.length==0){
            req.reject({
                code:"500",
                message:"Please pay the fee"
            });
        }
    })

    that.after('CREATE','Students', async req=>{
        console.log("enter after condition");
        let Student_id= req.Student_id;
        let postData={
            "Student_id": Student_id,
            "Busnumber":"1"
        }
        await INSERT.into('btpcapmproject_Transport').entries(postData);
    })
}

module.exports = registerStudentHandler;