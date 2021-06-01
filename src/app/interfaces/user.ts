export interface User {
    id: number;
    name: string;
    active: boolean;
    mail: string;
    role: UserType;
}

export enum UserType {
    ADMIN = 'ADMIN',
    USER = 'USER'

}