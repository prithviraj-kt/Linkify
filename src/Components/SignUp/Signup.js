import React from 'react';
import { Formik,Form } from 'formik';
import { TextField } from './TextField';

export const Signup=()=> {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email:' ',
                password: '',
                confirmPassword: ''

            }}>
           {formik => (
               <div>
                   <h1 className="my-4 font-weight-bold-display-4">Sign up </h1>
                   {console.log(formik.values)}
                   <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className="btn btn-success mt-5" type="submit">Sign Up</button>

                   </Form>
               </div>
           )}
        </Formik>
    )
}


