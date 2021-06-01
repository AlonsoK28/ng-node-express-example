import { Users } from "./users";

export interface UsersApi {
    code: number;
    data: Users;
    message: string;
    ok: boolean;
}