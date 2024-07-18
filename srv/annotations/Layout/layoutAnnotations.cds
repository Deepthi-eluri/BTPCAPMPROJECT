using {studentService as service} from '../../Student-service';



annotate service.Students with @UI:{
    SelectionFields  : [
        Student_id
    ],
    LineItem  : [
        {
            $Type:'UI.DataField',
            Value:Student_id
        } 
    ],
};

annotate service.Students with {
    Student_id @title : 'Student Id'
}