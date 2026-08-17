import {GenericDto} from "./generic-dto";
import {Employee} from "./employee";

export class CivilStatus extends GenericDto {

  civilStatusId: number;
  name: string;
  employees: Array<Employee>;

  constructor() {
    super();
  }
}
