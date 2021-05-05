import {Button, Checkbox, Dialog, makeStyles, Paper, TextField} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as yup from 'yup';
import {registrationThunk} from "../../bll/registrationReducer";
import './../../App.css';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}
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
    display:"flex",
}
const headerRegisterForm={
    textAlign:"center"
}
const styleFormBlock = {margin: "auto", width: 300, minHeight: 310,marginTop: "15%"}

export function RegistorBybl() {
    const classes = useStyles();
    const dispatch=useDispatch()




    const validationSchema = yup.object({
        login: yup
            .string()
            .min(4,'Минимальная длинна логина 4 символа')
            .email('Это не почта')
            .required('Обязательное поле'),
        password: yup
            .string()
            .min(8,'Минимальная длинна пароля 8 символа')
            .required('Обязательное поле'),

    });

    const formik = useFormik({
        initialValues: {
            login: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            dispatch(registrationThunk(values.login,values.password))
            console.log(values)
            resetForm()
        },
    });
    return (

            <Paper style={styleFormBlock} elevation={5}>
                <form className={"form"} onSubmit={formik.handleSubmit}>
                    <h2 className={"header_registration"}>Регистрация</h2>
                    <TextField
                        fullWidth
                        id="login"
                        label="Почта"
                        {...formik.getFieldProps("login")}
                        error={formik.touched.login && Boolean(formik.errors.login)}
                        helperText={formik.touched.login && formik.errors.login}
                        style={styleFormInput}
                    />
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

                    <Button style={styleFormButton} color="primary" variant="contained" fullWidth type="submit">
                        Регистриация
                    </Button>
                </form>
            </Paper>

    );
}
