import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {usersType} from "../bll/auth-reducer";

export const Prophail=()=> {
const user= useSelector<AppStateType,usersType>(st=>st.authReducer.user)
    console.log(user)
  return (
      <div >
          <h1>Hello {user.name}</h1>
      </div>
  );
}
