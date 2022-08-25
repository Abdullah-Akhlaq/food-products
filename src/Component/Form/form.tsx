import { Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import InputStyle from './Components/Input/input'
import * as yup from 'yup';
import './form'
interface IARRAY{
  name:string,
  label:string
};
const arrayText:IARRAY[]=[
 { name:'Feild1',label:'abd'},
 { name:'Feild2',label:'ali'},
 { name:'Feild3',label:'Hamza'},
]
const setState1=()=>{
}
const validationSchema = yup.object({
  Feild1: yup.string().required('Email is required'),
    Feild2: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

const Form = () => {
const formik = useFormik({
  initialValues: {
    Feild1: 'foobar@example.com',
    Feild2: 'foobar',
  },
  validationSchema: validationSchema,
  onSubmit:setState1,
});
  return (
   <Box>
    <form onSubmit={formik.handleSubmit}>
    {arrayText.map((item:IARRAY)=><Box>
      <InputStyle name={item.name} label={item.label} setState={setState1} values={formik.values.Feild1} />     
      </Box>)}
      <Button type='submit' variant='contained' sx={{my:3}}>Button</Button>
      </form>
   </Box>
  )
}

export default Form