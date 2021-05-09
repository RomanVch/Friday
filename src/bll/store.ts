import {applyMiddleware, combineReducers, createStore} from "redux";
import {RegistorReducer} from "./registrationReducer";
import thunk from "redux-thunk";
import {AuthReducer} from "./auth-reducer";
import {recoveryPasReducer} from "./recovery-reducer";
import {PacsReducer} from "./pacs-reducer";


const rootReducer = combineReducers(
    {
        authReducer: AuthReducer,
        Register: RegistorReducer,
        RecoveryPass: recoveryPasReducer,
        Packs:PacsReducer,
    }
)


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
