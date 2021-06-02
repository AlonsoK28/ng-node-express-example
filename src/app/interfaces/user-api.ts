import { User } from "./user";

export interface UserApiResponseList {
    code: number;
    data: User[];
    message: string;
    ok: boolean;
}

export interface UserApiResponseGeneric {
    code: number;
    message: string;
    ok: boolean;
}