export interface AuthInterface {
    username: string;
    password: string;
}

export interface LoginResponseInterface {
    status: string;
    token: string;
}
