import {combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";


const rootReducer = combineReducers(
    {authReducer: authReducer,
    }
)


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
