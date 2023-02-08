import {SHA256} from 'crypto-js';

export function encryptPassword(password: string){
    return SHA256(password).toString();
}
