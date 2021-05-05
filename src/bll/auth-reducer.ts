import {cardsAPI} from "../api/api";

const inithinalState = {
    loadingAuth: false,
    errorMessageAuth: ''
}

type AllActionType=LoadingAuthACType|ErrorLoadingAuthACType|CleanErrorLoadingAuthACType

export const AuthReducer = (state: any = inithinalState, action: AllActionType)=> {
    switch (action.type) {
        case 'AUTH-REGISTRATION': {
            return {...state, loadingAuth: !state.loading}
        }
        case 'ERROR-AUTH-REGISTRATION': {
            return {...state,  errorMessageAuth:action.error}
        }
        case 'CLEAN-ERROR-AUTH-REGISTRATION': {
            return {...state, errorMessageAuth:''}
        }
        default:
            return state;
    }
}

export const LoadingAuthAC = (): LoadingAuthACType => {
    return {type: 'AUTH-REGISTRATION'}
}
export type LoadingAuthACType = {
    type: 'AUTH-REGISTRATION'
}
export const errorLoadingAuthAC = (error:string): ErrorLoadingAuthACType => {
    return {type: 'ERROR-AUTH-REGISTRATION',error}
}
export type ErrorLoadingAuthACType = {
    type: 'ERROR-AUTH-REGISTRATION',
    error:string
}
export const CleanErrorLoadingAuthAC = (): CleanErrorLoadingAuthACType => {
    return {type: 'CLEAN-ERROR-AUTH-REGISTRATION'}
}
export type CleanErrorLoadingAuthACType = {
    type: 'CLEAN-ERROR-AUTH-REGISTRATION'
}
export const authThunk = (email: string, password: string, rememberMe:boolean) => {
    return (dispatch: any) => {
        dispatch(LoadingAuthAC());
        cardsAPI.login(email, password, rememberMe).then(res => {
            dispatch(LoadingAuthAC());
            dispatch(CleanErrorLoadingAuthAC())
        })
            .catch(err => {
                dispatch(LoadingAuthAC());
                dispatch(errorLoadingAuthAC(err.message));
            });
    };
};


