import { Redirect } from "react-router-dom";
import {cardsAPI} from "../api/api";

const inithinalState = {
    loadingAuth: false,
    errorMessageAuth: '',
    auth:false
}

type AllActionType=LoadingAuthACType|ErrorLoadingAuthACType|CleanErrorLoadingAuthACType|NotAuthMeACType|AuthMeACType

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
        case 'AUTH-ME': {
            return {...state, auth:true}
        }
        case 'NOT-AUTH-ME': {
            return {...state, auth:false}
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
export const NotAuthMeAC = (): NotAuthMeACType => {
    return {type: 'NOT-AUTH-ME'}
}
export type NotAuthMeACType = {
    type: 'NOT-AUTH-ME'
}
export const AuthMeAC = (): AuthMeACType => {
    return {type: 'AUTH-ME'}
}
export type AuthMeACType = {
    type: 'AUTH-ME'
}


export const authThunk = (email: string, password: string, rememberMe:boolean) => {
    return (dispatch: any) => {
        dispatch(LoadingAuthAC());
        cardsAPI.login(email, password, rememberMe).then(res => {
            dispatch(LoadingAuthAC());
            dispatch(CleanErrorLoadingAuthAC())
            dispatch(AuthMeAC())

        })
            .catch(err => {
                debugger
                dispatch(LoadingAuthAC());
                dispatch(errorLoadingAuthAC(err.response.data.error));
                dispatch(NotAuthMeAC())
            });
    };
};


export const authMeThunk = () => {
    return (dispatch: any) => {
        cardsAPI.authMePost().then( res=>
            dispatch(AuthMeAC())
        ).catch(res=>dispatch(NotAuthMeAC()))
    };
};

export const logOutThunk = () => {
    return (dispatch: any) => {
        cardsAPI.logOut().then( res=>
            dispatch(NotAuthMeAC())
    )
    };
};
