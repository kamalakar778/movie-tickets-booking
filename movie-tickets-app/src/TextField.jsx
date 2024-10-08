import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            {label ? <label htmlFor={field.name}>{label}</label> : <></>}
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                style={{ width: '20%' }}
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}

export default TextField;