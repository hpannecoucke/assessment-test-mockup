import IPermission from "@/interface/IPermission";

class Permission implements IPermission {
  read = false;
  create = false;
  modify = false;
  delete = false;
}
export default Permission;
