import React from 'react';
import SuperInputText from "./SuperComponents/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "./SuperComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "./SuperComponents/c2-SuperButton/SuperButton";

export const TestComponent=()=> {
  return (
    <div >
<SuperInputText/>
<SuperCheckbox name={'иван'}/>
<SuperButton/>
    </div>
  );
}
