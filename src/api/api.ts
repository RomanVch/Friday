import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials:true
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
    authMePost(){
        return instance.post('auth/me')

    }

}
