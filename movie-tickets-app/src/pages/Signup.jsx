// Render Prop
import React, { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios'

const SignUp = () => {
    const history = useNavigate();

    const handleClick = () => {
        alert("Signed Up Successfully");
        // history.push("/")
        return "window.location.href=window.location.href"

    }
    const initialValues = { email: '', password: '', confirmPassword: '' }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email Format').required("Required"),
        password: Yup.string().required("Enter a Valid Password"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], "password must match").required("Required"),
    })

    const handleSubmit = async (values) => {
        let response = await axios.post('https://reqres.in/api/users', values, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        // console.log(response.data)
        // // axios.post("https://reqres.in/api/users", values).then((response) => {
        // //     console.log("abc", response.status, response.data);
        // });
        console.log(JSON.stringify(response.data))
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10em" }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="form p-3">
                    <h1>Sign Up</h1><br></br>
                    <span>
                        <Field style={{}}
                            type="text"
                            name="firstName"
                            label="firstName"
                            placeholder="firstName"
                            className="form-control"
                        // onChange={e => setFirstName(e.target.value)}
                        ></Field>
                        <div><ErrorMessage name="firstName" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                    </span><br></br>
                    <span>
                        <Field
                            type="text"
                            name="lastName"
                            label="lastName"
                            placeholder="lastName"
                            className="form-control"
                        // onChange={e => setLastName(e.target.value)}

                        ></Field>
                        <div><ErrorMessage name="lastName" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                    </span><br></br>
                    <span>
                        <Field
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="lori123@gmail.com"
                            className="form-control"
                        // onChange={e => setEmail(e.target.value)}

                        ></Field>
                        <div><ErrorMessage name="email" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                    </span><br></br>
                    <span>
                        <Field type="password" name="password" id="password" placeholder="Password" className="form-control"
                        // onChange={e => setPassword(e.target.value)}
                        ></Field>
                        <div><ErrorMessage name="password" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                    </span><br></br>
                    <span>
                        <Field type="password" name="confirmPassword" id="password" placeholder="Confirm Password"
                        // onChange={handleChange}
                        ></Field>
                        <div><ErrorMessage name="confirmPassword" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>
                    </span><br></br>
                    <span>Already have an Account? Login <Link to="/Sign-In">here</Link></span><br></br>
                    <button className="btn btn-dark m-3" type="submit" onClick={handleClick} disabled={Formik.isValid}>Sign Up</button>

                </Form>
            </Formik >
        </div>
    )
};

export default SignUp;