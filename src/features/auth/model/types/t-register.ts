import { TLogin } from "./t-login";

export type TRegister = TLogin & {
    fio: string;
    phone: string;
}