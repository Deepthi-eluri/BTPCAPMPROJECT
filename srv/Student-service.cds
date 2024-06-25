using {btpcapmproject as my} from '../db/data-model';

service studentService{
    entity Students as projection on my.Students;
    entity StudentFees as projection on my.StudentFees;
    entity Transport as projection on my.Transport;
}