// Render Prop
import React from "react";
import "../style.css";
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "../TextField";
import * as Yup from "yup";
import { BsDisplay } from "react-icons/bs";
import axios, { isCancel, AxiosError } from 'axios';


export default function SignupForm() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        confirmPassword: "",
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Firstname Required!"),
        lastName: Yup.string(),
        email: Yup.string().email("Email is invalid!").required("Email Required!"),
        password: Yup.string()
            .min(4, "Password must be minimum 4 digits!")
            .required("Password Required!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match!")
            .required("Confirm password is reqired!"),
        age: Yup.number()
            .min(14, "Age must be minimum 14 Years!")
            .required("Age must be required!"),
    })
    const onSubmit = (values) => {
        console.log("Form Values", values)
    }
    const handleSubmit = async (values) => {
        console.log("Happy", values)
        try {
            const response = await axios.post('/Sign-Up', values);
            console.log(response.data); // Handle success or error
            alert(JSON.stringify(values, null, 2));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10em" }}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="form p-3">
                        <h1>Sign Up</h1><br></br>
                        <span>
                            <Field style={{}}
                                type="text"
                                name="firstName"
                                label="firstName"
                                placeholder="firstName"
                            ></Field>
                            <div><ErrorMessage name="firstName" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span>
                            <Field
                                type="text"
                                name="lastName"
                                label="lastName"
                                placeholder="lastName"
                            ></Field>
                            <div><ErrorMessage name="lastName" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span>
                            <Field
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="lori123@gmail.com"
                            ></Field>
                            <div><ErrorMessage name="email" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span>
                            <Field type="password" name="password" id="password" placeholder="Password"></Field>
                            <div><ErrorMessage name="password" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span>
                            <Field type="password" name="confirmPassword" id="password" placeholder="Confirm Password"></Field>
                            <div><ErrorMessage name="confirmPassword" component="h6" style={{ color: "red", fontSize: "12px" }} /></div>
                        </span><br></br>
                        <span>Already have an Account? Login <Link to="/Sign-In">here</Link></span><br></br>
                        <button className="btn btn-dark m-3" type="submit" disabled={Formik.isValid}>Sign Up</button>
                    </Form>
                </Formik >
            </div >
        </>
    );
}
