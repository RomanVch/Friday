import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../SuperComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../SuperComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../SuperComponents/c3-SuperCheckbox/SuperCheckbox";

export const Registor=()=> {
  const [login,setLogin]=useState<string>('')
  const [password,setPassword]=useState<string>('')
    return (
    <div>
<form>
    <SuperInputText  onChangeText={setLogin} value={login} />
    <SuperInputText onChangeText={setPassword} value={login} type={"password"}/>
    <div><SuperCheckbox name={"remeberMe"}/><p>Запомнить</p></div>
    <SuperButton names={"Регистрация"}/>
</form>
    </div>
  );
}
