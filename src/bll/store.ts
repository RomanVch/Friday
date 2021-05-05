import {applyMiddleware, combineReducers, createStore} from "redux";
import {RegistorReducer} from "./registrationReducer";
import thunk from "redux-thunk";
import {AuthReducer} from "./auth-reducer";


const rootReducer = combineReducers(
    {authReducer: AuthReducer,
       Register:RegistorReducer
    }
)


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunk))
