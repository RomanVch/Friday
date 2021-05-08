import {recoveryPasTC} from "../bll/recovery-reducer";
import SuperButton from "./SuperComponents/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logOutThunk} from "../bll/auth-reducer";
import {AppStateType} from "../bll/store";
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {usersType} from "../bll/auth-reducer";
    
export const Prophail = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.auth)
    const user= useSelector<AppStateType,usersType>(st=>st.authReducer.user)
    return (

        <div>
            {/*{!isAuth && <Redirect to="/Login" />}*/}
            <h1>Hello {user.name}</h1>
            <SuperButton onClick={() => dispatch(logOutThunk())} names={"LogOut"}/>

        </div>
    );
}
