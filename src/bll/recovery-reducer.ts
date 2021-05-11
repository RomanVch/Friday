import {Dispatch} from "redux";
import {recoveryAPI, ResultCodeStatuses} from "../api/recovery-api";
import {log} from "util";

export type RequestErrorType = string | null
export type StatusRequestType = 'succeeded' | 'failed' | null

const initialState = {
    email: '' as string,
    error: null as RequestErrorType,
    statusRequest: null as StatusRequestType
}

type InitialStateType = typeof initialState

export const recoveryPasReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'RECOVERY-PASS/SET-EMAIL':
            return {...state, email: action.email}
        // case 'RECOVERY-PASS/SET-ERROR':
        //     return {...state, error: action.error}
        case 'RECOVERY-PASS/SET-STATUS':
            return {...state, statusRequest: action.status}
        default:
            return state
    }
}

export const recoveryPasAC = (email: string) =>
    ({type: 'RECOVERY-PASS/SET-EMAIL', email} as const)
// export const setErrorAC = (error: string) =>
//     ({type: 'RECOVERY-PASS/SET-ERROR', error} as const)
export const setStatusAC = (status: StatusRequestType) =>
    ({type: 'RECOVERY-PASS/SET-STATUS', status} as const)

export const recoveryPasTC = (email: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        // dispatch(setAppStatusAC('loading'))
        recoveryAPI.recoveryPass(email)
            .then((res) => {
                // if (res.data.resultCode === ResultCodeStatuses.Success) {
                dispatch(recoveryPasAC(email))
                dispatch(setStatusAC('succeeded'))
                // }
            })
            .catch((err) => {
                // dispatch(setErrorAC(err))
                dispatch(setStatusAC('failed'))
                // console.log(err)
            })
    }
}

type ActionsType = ReturnType<typeof recoveryPasAC> |
    // ReturnType<typeof setErrorAC> |
    ReturnType<typeof setStatusAC>

//status 200
//data answer:false; html:false; info:sent —ฅ/ᐠ.̫ .ᐟ\\ฅ—"; success:true
