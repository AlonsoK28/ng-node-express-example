import { User } from "./user";

export interface UserApi {
    code: number;
    data: User[];
    message: string;
    ok: boolean;
}