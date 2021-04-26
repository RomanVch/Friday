import {combineReducers, createStore} from "redux";
import {userReducer} from "./user-reducer";
import {messageReducer} from "./chat-reducer";

const rootReducer = combineReducers(
    {user: userReducer,
    chat:messageReducer
    }
)


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
