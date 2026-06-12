import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function ResetPassword() {
    let nav = useNavigate()
    let [errorMsg, setErrorMsg] = useState("")
    let [loading, setLoading] = useState(false)
    let baseUrl = "https://ecommerce.routemisr.com"
    let validationSchema = Yup.object({
        email: Yup.string().required("Email Required").email("enter Valid Email"),
        newPassword: Yup.string().required("Password Required").matches(/^[A-Z][a-z0-9]{3,16}$/, "enter Valid Password"),
    })
    let ResetPasswordForm = useFormik({
        initialValues: {
            email: "",
            newPassword: ""
        },
        validationSchema,
        onSubmit: ResetPassword

    })

    async function ResetPassword(val) {
        setLoading(true)
        try {
            let { data } = await axios.put(`${baseUrl}/api/v1/auth/resetPassword`, val)
            console.log(data);
            if (data.token) {
                localStorage.setItem('tkn', data.token)
                nav('/login')
            }
        } catch (err) {
            console.log(err);
            setErrorMsg(err?.response?.data?.message || "Failed to reset password, please try again")
        }
        setLoading(false)
    }
    return <>
      <Helmet>
    <title>Reset Password - Fresh Cart</title>
    <meta name="description" content="Set a new password for your Fresh Cart account." />
  </Helmet>
        <div className='w-75 mx-auto py-5 text-start'>

            <form onSubmit={ResetPasswordForm.handleSubmit}>
                {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
                <label htmlFor="email">email</label>
                <input onChange={ResetPasswordForm.handleChange} onBlur={ResetPasswordForm.handleBlur} type="email" className='form-control' name="email" id="email" />
                {ResetPasswordForm.touched.email ? <p className='text-danger'>{ResetPasswordForm.errors.email}</p> : ""}
                <label htmlFor="newPassword">newPassword</label>
                <input onChange={ResetPasswordForm.handleChange} onBlur={ResetPasswordForm.handleBlur} type="password" className='form-control' name="newPassword" id="newPassword" />
                {ResetPasswordForm.touched.newPassword ? <p className='text-danger'>{ResetPasswordForm.errors.newPassword}</p> : ""}
                <button disabled={!(ResetPasswordForm.isValid && ResetPasswordForm.dirty) || loading} className='btn bg-min text-light'>
                    {loading ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </div>
    
</>}
