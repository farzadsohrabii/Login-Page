import * as yup from 'yup'

// Error messages components

export const Schema = yup.object({
    name: yup.string()
        .min(3 ,'Name must be at least 3 chars')
        .required('name is a required field'),

    email: yup.string()
        .email('invalid email format')
        .required('email is a required field'),
    
    password: yup.string()
        .min(8 ,'Password must be at least 8 chars')
        .required('Password is a required field')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
})
