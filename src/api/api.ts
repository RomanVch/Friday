import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
})

export const cardsAPI = {
    registration(email: string, password: string) {
        const promise = instance.post('auth/register', {
            email: email,
            password: password
        });
        return promise;
    },
    login(
        email: string,
        password: string,
        rememberMe: boolean) {
        const promise = instance.post('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe
        });
        return promise;
    },
    recoveryPass(email: string) {
        const promise = instance.post<ResponseType>('auth/set-new-password', {
            email: email,
            message:
                `<div style="background-color: lime; padding: 15px"> +
                password recovery link:
                <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
        });
        return promise;
    }

}
