import React, {useState} from 'react';
import SuperInputText from '../SuperComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../SuperComponents/c2-SuperButton/SuperButton';
import {registrationThunk} from "../../bll/registrationReducer";
import {useDispatch, useSelector} from "react-redux";
import {recoveryPasTC, RecoveryPasType} from "../../bll/recovery-reducer";
import SuperCheckbox from "../SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import { AppStateType } from '../../bll/store';

export const RecoveryPassport = () => {
    const defaultEmail = useSelector<AppStateType, string>((state)=>state.RecoveryPass.email)
    const [email,setEmail]=useState<string>(defaultEmail)
    const dispatch=useDispatch()
    return (
        <div>
            <form>
                <SuperInputText onChangeText={setEmail} value={email}/>
                <SuperButton onClick={()=>dispatch(recoveryPasTC(email))} names={"Отправить"}/>
            </form>
        </div>
    );
}
