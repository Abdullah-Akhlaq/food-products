import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import InputStyle from './Components/Input/input'
import * as yup from 'yup';
import './form'
interface IARRAY{
  name:string,
  label:string
};

interface IFormValues{
  email:string,
  password:string
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

// const arrayText:IARRAY[]=[
//  { name:'Feild1',label:'abd'},
//  { name:'Feild2',label:'ali'},
//  { name:'Feild3',label:'Hamza'},
// ]
// const setState1=()=>{
// }
// const validationSchema = yup.object({
//   Feild1: yup.string().required('Email is required'),
//     Feild2: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
// });

const Form = () => {
const [formData,setFormData]=React.useState({})
  const formSubmitHandler=(values:any)=>{
    setFormData({ email:values.email,
        password:values.password})
 
    // const dataForm={
    //   email:values.email,
    //   password:values.password
    // }
    
   const authUser=async()=>{
    
      const response = await fetch('https://react-3048b-default-rtdb.firebaseio.com/MaterialForm.json', {
          method: 'POST',
          body: JSON.stringify(
           formData
          ),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      if (!response.ok) {
          const data = await response.json();
          let errorMessage = data.error.message
          throw new Error(errorMessage)
      }
  
  
    
  
  // setAlreadyExist(true)
  }
  authUser()
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    }, validationSchema: validationSchema,
    onSubmit: formSubmitHandler
  });
// const formik = useFormik({
//   initialValues: {
//     Feild1: 'foobar@example.com',
//     Feild2: 'foobar',
//   },
//   validationSchema: validationSchema,
//   onSubmit:setState1,
// });
  return (
   <Box> 
    <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
   </Box>
  )
}

export default Form