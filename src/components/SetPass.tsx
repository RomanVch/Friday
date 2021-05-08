import React from "react";
import {Button, Paper, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as yup from 'yup';
// import './../../App.css';
import {setNewPassTC} from "../bll/newPass-reducer";

const styleFormInput = {
    marginBottom: 20,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%"
}

const styleFormButton = {
    width: 237.5,
    margin: "auto",
    marginTop: 10,
    display: "flex",
}

const styleFormBlock = {margin: "auto", width: 300, minHeight: 310, marginTop: "15%"}

export function SetPass() {
    const dispatch = useDispatch()
    // const status = useSelector<AppStateType, StatusRequestType>(state => state.RecoveryPass.statusRequest)
    // const err= useSelector<AppStateType,RequestErrorType>(state=>state.RecoveryPass.error)


    const validationSchema = yup.object().shape({
        password: yup
            .string()
            .min(8, 'Минимальная длинна пароля 8 символа')
            .required('Обязательное поле'),
        changepassword: yup
            .string()
            .oneOf(
                [yup.ref("password"), null],
                "Пароли не совпадают"
            )
            .required('Обязательное поле')
    });

    const formik = useFormik({
        initialValues: {
            password: "",
            changepassword: ""

        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            dispatch(setNewPassTC(values.password, values.changepassword))
            resetForm()
        },
    });
    return (
        <Paper style={styleFormBlock} elevation={5}>
            <form className={"form"} onSubmit={formik.handleSubmit}>
                <h2 className={"header_registration"}>Введите новый пароль</h2>
                <TextField
                    fullWidth
                    id="password"
                    label="Пароль"
                    {...formik.getFieldProps("password")}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    style={styleFormInput}
                    type={"password"}
                />
                <TextField
                    fullWidth
                    id="changepassword"
                    label="Подтвердите пароль"
                    {...formik.getFieldProps("changepassword")}
                    error={formik.touched.changepassword && Boolean(formik.errors.changepassword)}
                    helperText={formik.touched.changepassword && formik.errors.changepassword}
                    style={styleFormInput}
                    type={"password"}
                />
                <Button style={styleFormButton} color="primary" variant="contained" fullWidth type="submit">
                    Отправить
                </Button>
            </form>
        </Paper>

    )
        ;
}
