import {GenericDto} from "./generic-dto";
import {Employee} from "./employee";
import {RoleUser} from "./role-user";

export class User extends GenericDto {
  userId: number;
  password: string;
  username: string;
  roleUsers: Array<RoleUser> = [];
  roles: string[] = [];
  employee: Employee = new Employee();

  constructor() {
    super();
  }
}
