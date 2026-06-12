import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function ForgetPassword() {

    let Nav = useNavigate()
    let [erros, seterrors] = useState("")
    let [loading, setLoading] = useState(false)
    let baseUrl = "https://ecommerce.routemisr.com"
    let validationSchema = Yup.object({
        email: Yup.string().required("email Required").email("enter Valid Email")
    })
    let ForgetForm = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema,
        onSubmit: SendForgetApi
    })
    async function SendForgetApi(val) {
        setLoading(true)
        try {
            let { data } = await axios.post(`${baseUrl}/api/v1/auth/forgotPasswords`, val)
            if (data.statusMsg === "success") {
                document.getElementById("resetForm").classList.remove("d-none")
                document.getElementById("forgetForm").classList.add("d-none")
            }
            console.log(data);
        } catch (err) {
            console.log(err);
            seterrors(err?.response?.data?.message || "Something went wrong, please try again")
        }
        setLoading(false)
    }


    let validationSchema2 = Yup.object({
        resetCode: Yup.string().required("resetCode Required").matches(/^[0-9]+$/, "must be only numbers")
    })
    let resetForm = useFormik({
        initialValues: {
            resetCode: ""
        },
        validationSchema: validationSchema2,
        onSubmit: sendResetCode
    })
    async function sendResetCode(val) {
        setLoading(true)
        try {
            let { data } = await axios.post(`${baseUrl}/api/v1/auth/verifyResetCode`, val)

            if (data.status === "Success") {
                Nav('/ResetPassword')
            }
            console.log(data);
        } catch (err) {
            seterrors(err?.response?.data?.message || "Invalid reset code, please try again")
            console.log(err?.response?.data?.message);
        }
        setLoading(false)
    }

    return (
        <>
<Helmet>
    <title>Forget Password - Fresh Cart</title>
    <meta name="description" content="Reset your Fresh Cart account password. Enter your email to receive a password reset code." />
  </Helmet>
            <div id='forgetForm' className='my-5'>


                <form onSubmit={ForgetForm.handleSubmit}>
                    {erros ? <div className='alert alert-danger'>{erros}</div> : ""}
                    <label htmlFor="email">Enter Email</label>
                    <input onChange={ForgetForm.handleChange} onBlur={ForgetForm.handleBlur} type="text" name="email" id="email" className='form-control' />

                    {ForgetForm.touched.email ? <p className='text-danger'>{ForgetForm.errors.email}</p> : ""}
                    <button disabled={!(ForgetForm.isValid && ForgetForm.dirty) || loading} className='btn btn-success'>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
            <div id='resetForm' className='my-3 d-none'>
                {erros ? <div className='alert alert-danger'>{erros}</div> : ""}
                <form onSubmit={resetForm.handleSubmit}>
                    <label htmlFor="resetCode">resetCode</label>
                    <input onBlur={resetForm.handleBlur} onChange={resetForm.handleChange} type="text" name='resetCode' id='resetCode' className='form-control' />
                    {resetForm.touched.resetCode ? <p className='text-danger'>{resetForm.errors.resetCode}</p> : ""}
                    <button disabled={!(resetForm.dirty && resetForm.isValid) || loading} className='btn btn-success'>
                        {loading ? "Verifying..." : "Verify Code"}
                    </button>

                </form>
            </div>


        </>
    )
}
