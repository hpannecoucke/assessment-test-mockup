import IUser from "@/interface/Iuser";

export default class User implements IUser{
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    
}