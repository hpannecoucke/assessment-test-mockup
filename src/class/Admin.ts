import IAdmin from "@/interface/Iadmin";
import Permission from "@/class/Permission";

export default class Admin implements IAdmin {
  constructor() {
    this.permission = new Permission();
  }
  permission!: Permission;
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
}
