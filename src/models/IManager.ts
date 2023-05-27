export interface IManager {
    rukovoditel: string;
    sotrudniki: Record<string, IEmployee>;
}

export interface IEmployee {
    name: string;
    email: string;
    birthday: string;
}