import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type aaa = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: any
    spanClassName?: string
    name:string
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, name,// в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalInputClassName = `${className ? className : ""}`;

    return (
        <div className={s.md_checkbox}>

            <input
                type={"checkbox"}
                onChange={onChangeCallback}
                className={finalInputClassName}
                name={name}
                id={"i2"}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            <label htmlFor={"i2"}>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
        </div>
    );
}

export default SuperCheckbox;
