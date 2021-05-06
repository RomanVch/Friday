import {Dispatch} from "redux";
import {recoveryAPI, ResultCodeStatuses} from "../api/recovery-api";
import {log} from "util";

const initialState: RecoveryPasType = {
    email: ''
}

export const recoveryPasReducer = (state: RecoveryPasType = initialState, action: ActionsType): RecoveryPasType => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            return {...state, email: action.email}
        default:
            return state
    }
}

export const recoveryPasAC = (email: string) => ({type: 'ADD-TODOLIST', email} as const)


export const recoveryPasTC = (email: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        // dispatch(setAppStatusAC('loading'))
        recoveryAPI.recoveryPass(email)
            .then((res) => {
                debugger
                // if (res.data.resultCode === ResultCodeStatuses.Success) {
                dispatch(recoveryPasAC(email))
                console.log(res.status)
                console.log(res.data.error)
                console.log(res.data.info)
                // dispatch(setAppStatusAC('succeeded'))
                // }
            })
            .catch((err) => {
                // handleServerNetworkError(err.message, dispatch)
                console.log(err)
            })
    }
}

type ActionsType = ReturnType<typeof recoveryPasAC>

export type RecoveryPasType = {
    email: string
}