import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../Utiles/validators";
import {login, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../../common/FormsControl/FormsControl.module.css"



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                           type={"password"}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                {props.error &&
                    <div className={styles.summaryError}>
                        {props.error}
                    </div>
                }
                    <div>
                    <button>Login</button>
                </div>
         </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email , formData.password , formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};



let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



export default connect (mapStateToProps , {login})(Login);