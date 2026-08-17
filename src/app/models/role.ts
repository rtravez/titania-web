import {GenericDto} from "./generic-dto";
import {RoleUser} from "./role-user";

export class Role extends GenericDto {

  roleId: number;
  name: string;
  roleUsers: Array<RoleUser>;

  constructor() {
    super();
  }
}
