namespace company;

entity Companies{
     key Company_id: String;
        Company_name: String;
        branches: Association to many Companies_Branch on branches.Company_id = $self.Company_id;
}

 entity Companies_Branch{
    key Company_id: String;
    key branch_id: String;
        branch_location: String;

 }  

