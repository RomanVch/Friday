import React, {useState} from 'react';
import SuperInputText from '../SuperComponents/c1-SuperInputText/SuperInputText';
import SuperButton from '../SuperComponents/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from "react-redux";
import {recoveryPasTC} from "../../bll/recovery-reducer";
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
