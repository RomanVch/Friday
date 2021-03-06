import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: any
names?:string
    functionButton?:any
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default + " " + s.red}`;

    return (
            <button className={finalClassName}
                    onClick={restProps.functionButton}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            >
                {restProps.names}
            </button>
    );
}

export default SuperButton;
