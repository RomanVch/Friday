import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";
import {RegistorReducer} from "./registrationReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers(
    {authReducer: authReducer,
       Register:RegistorReducer
    }
)


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunk))
