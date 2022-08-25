import { Delete } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React, { Fragment } from "react";


interface FieldValues {
  name: string;
  startIcon?:string
  label:string
  setState?:()=>void
  values:string
}
const textFieldChange=(val:any)=>{
  console.log(val.target.value, 'checkValue');
  
}
const InputStyle: React.FC<FieldValues> = (props) => {
  return (
    <Fragment>
      <Box sx={{pt:2}}>{props.name}</Box>
      <Box>
        <TextField  label={props.label} defaultValue={props.values} size="small"/>   
      </Box>
    </Fragment>
  );
};

export default InputStyle;
