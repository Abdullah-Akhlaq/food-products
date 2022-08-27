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


// import { Box, ButtonGroup } from "@mui/material";
// import React from "react";

// interface IArrayofData {
//   id: number;
//   Name: string;
//   Value: string;
//   optionsOfThing: IoptionsOfThing[];
// }
// interface IoptionsOfThing {
//   name: string;
// };

// const arrayofData: IArrayofData[] = [
//   {
//     id: 1,
//     Name: "Write something",
//     optionsOfThing: [
//       { name: "Options1" },
//       { name: "Option2" },
//       { name: "Option3" },
//     ],
//     Value: "Options1",
//   },
//   {
//     id: 2,
//     Name: "Write something new",
//     optionsOfThing: [
//       { name: "Options21" },
//       { name: "Option22" },
//       { name: "Option23" },
//     ],
//     Value: "Option22",
//   },
//   {
//     id: 3,
//     Name: "Write something Clean",
//     optionsOfThing: [
//       { name: "Options31" },
//       { name: "Option32" },
//       { name: "Option33" },
//     ],
//     Value: "Options31",
//   },
//   {
//     id: 4,
//     Name: "Write something Cool",
//     optionsOfThing: [
//       { name: "Options41" },
//       { name: "Option42" },
//       { name: "Option43" },
//     ],
//     Value: "Option43",
//   },
// ];





// const SelectTheValue = () => {
//   const [filtered,setfiltered]=React.useState(1)
//   const handleValues=(value:string,value1:string)=>{
//    if(value===value1)
//    {
//     setfiltered((prev)=>++prev)
//    }
//    else{
//     setfiltered(filtered)
//    }
  
    
  
   
//   }
//   return (
//     <div>
//       {filtered}
//       {arrayofData.map((valuesOfData: IArrayofData) =>
//        (
//         <Box key={valuesOfData.id}>
//           <Box  sx={{ px: 3 }}>
           
//             {valuesOfData.optionsOfThing.map((languages) => {
//               return( <ButtonGroup onClick={()=>handleValues(valuesOfData.Value,languages.name)} sx={{px:2,color:'green', borderColor:'red',border:1}} >

//                 {languages.name}
//                 </ButtonGroup>);
//             })}
//           </Box>
//         </Box>
//       ))}
//     </div>
//   );
// };

// export default SelectTheValue;
