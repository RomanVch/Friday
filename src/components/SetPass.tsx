import React from 'react';
import SuperInputText from './SuperComponents/c1-SuperInputText/SuperInputText';
import SuperButton from './SuperComponents/c2-SuperButton/SuperButton';

export const SetPass = () => {
    return (
        <div>
            <span>SetPass</span>
            <form action="">
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton names={"SetPass"}/>
            </form>
        </div>
    );
}
