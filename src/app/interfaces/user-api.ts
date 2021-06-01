import { User } from "./user";

export interface UserApi {
    code: number;
    data: User[];
    message: string;
    ok: boolean;
}

export interface addNewUserApi {
    code: number;
    message: string;
    ok: boolean;
}