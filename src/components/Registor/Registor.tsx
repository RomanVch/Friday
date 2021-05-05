import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../SuperComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../SuperComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import {cardsAPI} from "../../api/api";
import {registrationThunk} from "../../bll/registrationReducer";
import {useDispatch} from "react-redux";

const registration=async (email:string,password:string)=>{
   return await cardsAPI.registration(email,password)
}

export const Registor=()=> {
  const [login,setLogin]=useState<string>('')
  const [password,setPassword]=useState<string>('')
const dispatch=useDispatch()
    return (
    <div>
<form>
    <SuperInputText  onChangeText={setLogin} value={login} />
    <SuperInputText onChangeText={setPassword} value={password} type={"password"}/>
    <div><SuperCheckbox name={"remeberMe"}/><p>Запомнить</p></div>
    <button onClick={()=>dispatch(registrationThunk(login,password))}>dddd</button>
</form>
    </div>
  );
}
