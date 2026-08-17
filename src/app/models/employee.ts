import {GenericDto} from "./generic-dto";
import {CivilStatus} from "./civil-status";
import {Income} from "./income";
import {User} from "./user";

export class Employee extends GenericDto {

  employeeId: number;
  identification: string;
  name: string;
  lastname: string;
  city: string;
  address: string;
  email: string;
  birthDate: Date;
  telephone: string;
  entryDate: Date;
  civilStatus: CivilStatus;
  users: Array<User>;
  incomes: Array<Income>;

  constructor() {
    super();
  }
}
