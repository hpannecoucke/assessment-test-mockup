import Permission from "@/class/Permission";
import IUser from "./Iuser";

interface IAdmin extends IUser {
  permission: Permission;
}

export default IAdmin;
