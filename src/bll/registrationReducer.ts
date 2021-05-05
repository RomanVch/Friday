import {cardsAPI} from "../api/api";

const inithinalState = {
    loading: false,
    errorMessage: ''
}

type AllActionType=LoadingRegistorACType|ErrorLoadingRegistorACType|CleanErrorLoadingRegistorACType

export const RegistorReducer = (state: any = inithinalState, action: AllActionType)=> {
    switch (action.type) {
        case 'LOADING-REGISTRATION': {
            return {...state, loading: !state.loading}
        }
        case 'ERROR-LOADING-REGISTRATION': {
            return {...state,  errorMessage:action.error}
        }
        case 'CLEAN-ERROR-LOADING-REGISTRATION': {
            return {...state, errorMessage:''}
        }
        default:
            return state;
    }
}

export const LoadingRegistorAC = (): LoadingRegistorACType => {
    return {type: 'LOADING-REGISTRATION'}
}
export type LoadingRegistorACType = {
    type: 'LOADING-REGISTRATION'
}
export const errorLoadingRegistorAC = (error:string): ErrorLoadingRegistorACType => {
    return {type: 'ERROR-LOADING-REGISTRATION',error}
}
export type ErrorLoadingRegistorACType = {
    type: 'ERROR-LOADING-REGISTRATION',
    error:string
}
export const CleanErrorLoadingRegistorAC = (): CleanErrorLoadingRegistorACType => {
    return {type: 'CLEAN-ERROR-LOADING-REGISTRATION'}
}
export type CleanErrorLoadingRegistorACType = {
    type: 'CLEAN-ERROR-LOADING-REGISTRATION'
}
export const registrationThunk = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(LoadingRegistorAC());
     cardsAPI.registration(email, password).then(res => {
            dispatch(LoadingRegistorAC());
            dispatch(CleanErrorLoadingRegistorAC())
        })
            .catch(err => {
                dispatch(errorLoadingRegistorAC(err.message));
            });
    };
};
