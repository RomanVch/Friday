import {Button, Paper, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as yup from 'yup';
import './../../App.css';
import {recoveryPasTC, RequestErrorType, StatusRequestType} from "../../bll/recovery-reducer";
import {AppStateType} from "../../bll/store";
import {Alert} from "@material-ui/lab";

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

const styleFormBlock = {margin: "auto", width: 300, minHeight: 220, marginTop: "15%"}

export function RecoveryPassBybl() {
    const dispatch = useDispatch()
    const status = useSelector<AppStateType, StatusRequestType>(state => state.RecoveryPass.statusRequest)
    // const err= useSelector<AppStateType,RequestErrorType>(state=>state.RecoveryPass.error)


    const validationSchema = yup.object({
        email: yup
            .string()
            .min(5, 'Минимальная длинна 4 символа')
            .email('Введите корректный email')
            .required('Обязательное поле'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            dispatch(recoveryPasTC(values.email))
            resetForm()
        },
    });
    return (
        <Paper style={styleFormBlock} elevation={5}>
            <form className={"form"} onSubmit={formik.handleSubmit}>
                <h2 className={"header_registration"}>Восстановение пароля</h2>
                <TextField
                    fullWidth
                    id="email"
                    label="Почта"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    style={styleFormInput}
                />
                <Button style={styleFormButton} color="primary" variant="contained" fullWidth type="submit">
                    Отправить
                </Button>
            </form>
            {/*{err&&<Alert severity="error">{err}</Alert>}*/}
            {status === 'succeeded'
                ? <Alert severity="success">Инструкции по восттановлению отправлены на почту</Alert>
                : status === 'failed'
                    ? <Alert severity="error">Пользователь с введенным email аддресом не зарегестрирован</Alert>
                    : null
            }
        </Paper>

    );
}

