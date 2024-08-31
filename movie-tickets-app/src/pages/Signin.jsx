// Render Prop
import React from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "../TextField";
import * as Yup from "yup";
import { BsDisplay } from "react-icons/bs";
import axios, { isCancel, AxiosError } from 'axios';

export default function SigninForm() {
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Email is invalid!").required("Email Required!"),
        password: Yup.string()
            .min(4, "Password must be minimum 4 digits!")
            .required("Password Required!"),
    });
    const history = useNavigate();

    const handleClick = () => {
        alert("Signed In Successfully");

        // history.push("/")
        // "window.location.href=window.location.href"

    }

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://reqres.in/api/users', values);
            console.log(response.data); // Handle success or error
            // alert(JSON.stringify(values, null, 2));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10em" }}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="form p-3 ">
                        <h1>Login</h1><br></br>
                        <span>
                            <Field
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="lori123@gmail.com"
                                className="form-control"
                            ></Field>
                            <div><ErrorMessage name="email" component="div" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span>
                            <Field type="password" name="password" placeholder="Password" className="form-control" ></Field>
                            <div><ErrorMessage name="password" component="div" style={{ color: "red", fontSize: "12px" }} /></div>

                        </span><br></br>
                        <span >Don't have an account? Sign up here. <Link to="/signup">here</Link></span><br></br>

                        <button onClick={handleClick} className="btn btn-primary m-3" type="submit" disabled={Formik.isValid}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>&nbsp;&nbsp;Login</button>
                    </Form>
                </Formik >
            </div >
        </>
    );
}
