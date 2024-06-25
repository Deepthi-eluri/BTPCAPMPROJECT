namespace btpcapmproject;

entity Students{
    key Student_id: String;
}

entity StudentFees{
    key Student_id: String;
        fee_paid: String;
}

entity Transport{
    Key Student_id: String;
        Busnumber: String;
}