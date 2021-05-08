import axios from 'axios'

// const settings = {
//     withCredentials: true,
// }

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',

})

export const recoveryAPI = {
    recoveryPass(email: string) {
        const promise = instance.post<ResponseType>('auth/forgot', {
            email: email,
            message:
                `<div style="background-color: lime; padding: 15px"> +
                password recovery link:
                <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
        });
        return promise;
    },
    setNewPass(password: string, resetPasswordToken: string) {
        const promise = instance.post<ResponseType>('set-new-password', {
            password,
            resetPasswordToken});
        return promise;
    }

}

// types
type ResponseType = {
    info: string
    error: string
}

export enum ResultCodeStatuses {
    Success = 0,
    Error = 1,
    Captcha = 10
}
