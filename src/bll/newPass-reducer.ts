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

export const newPassReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'RECOVERY-PASS/SET-EMAIL':
            return {...state, email: action.email}
        case 'RECOVERY-PASS/SET-STATUS':
            return {...state, statusRequest: action.status}
        default:
            return state
    }
}

export const recoveryPasAC = (email: string) =>
    ({type: 'RECOVERY-PASS/SET-EMAIL', email} as const)
export const setStatusAC = (status: StatusRequestType) =>
    ({type: 'RECOVERY-PASS/SET-STATUS', status} as const)

export const setNewPassTC = (password: string, resetPasswordToken: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        recoveryAPI.setNewPass(password, resetPasswordToken)
            .then((res) => {

                // }
            })
            .catch((err) => {
            })
    }
}

type ActionsType = ReturnType<typeof recoveryPasAC> |
    ReturnType<typeof setStatusAC>
