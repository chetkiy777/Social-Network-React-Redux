import React from 'react';
import styles from './FormsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;   //если обьект трогали и есть ошибка, - заносим в переменную hasError
    return (
        <div className={styles.form_control + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;   //если обьект трогали и есть ошибка, - заносим в переменную hasError
    return (
        <div className={styles.form_control + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
};