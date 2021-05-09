import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
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
    authMePost() {
        return instance.post('auth/me')

    },
    logOut() {
        return instance.delete('auth/me')
    },
    getPack(page: number = 1, pageCont: number = 4) {
        return instance.get(`cards/pack?page=${page}&pageCount=${pageCont}`)
    },
    newPack(name: string, path: string) {
        return instance.post('cards/pack', {cardsPack: {name, path}})
    },
    updatePack(name: string, _id: string) {
        return instance.put('cards/pack', {
            cardsPack: {
                name, _id

            }
        })
    },
    deletePack(_id:string){
       return  instance.delete(`cards/pack/?id=${_id}`)
    }

}
