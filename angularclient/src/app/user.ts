import { Usertype } from "./usertype";

export class User {
    id: string = '';
    name: string = '';
    firstname: string = '';
    email: string = '';
    userType : Usertype | null = null;
}
