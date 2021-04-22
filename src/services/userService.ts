import Admin from "@/class/Admin";
import Permission from "@/class/Permission";
import User from "@/class/User";

export default {
  createUser: (
    id: number,
    firstname: string,
    lastname: string,
    email: string
  ): User => {
    const user = new User();
    user.id = id;
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    return user;
  },
  createAdmin: (
    id: number,
    firstname: string,
    lastname: string,
    email: string
  ): Admin => {
    const admin = new Admin();
    admin.id = id;
    admin.firstname = firstname;
    admin.lastname = lastname;
    admin.email = email;
    return admin;
  },
  addAdminPermnission: (): Permission => {
    const permission = new Permission();
    permission.read = true;
    permission.create = true;
    permission.modify = true;
    permission.delete = true;
    return permission;
  },
};
