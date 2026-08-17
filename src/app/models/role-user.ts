import {Role} from "./role";
import {AssociationRoleUser} from "./association-role-user";
import {GenericDto} from "./generic-dto";
import {User} from "./user";

export class RoleUser extends GenericDto {

  roleUserId: number;
  role: Role;
  user: User;
  associationRoleUsers: Array<AssociationRoleUser>;

  constructor() {
    super();
  }
}
