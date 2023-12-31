import React, { useEffect, useState } from 'react';
import { makeStyles,createMuiTheme, ThemeProvider,styled } from '@material-ui/core/styles';

import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel
} from "@material-ui/core"
import {ottp} from "./Service"

const useStyles = makeStyles({
    root : {
         
         "& .MuiFormLabel-root.Mui-focused": {
             color : "#5fe0a2"
         },
         "& .MuiInput-underline.Mui-focused:after": {
            borderBottom : "2px solid #5fe0a2",
            color : "#5fe0a2"
        },
        "& .MuiInput-underline.Mui-focused:before": {
            borderBottom : "2px solid #5fe0a2",
            color : "#5fe0a2"
        }
         
        
        


    }
})

function OTP() {
    const [otp,setOtp] = useState('')
    const [num,setNum] = useState('')

    useEffect(()=>{
        
        console.log()
        let number = JSON.parse(localStorage.getItem('sms'))
        let otpp = JSON.parse(localStorage.getItem('otp'))
        
        console.log("otp",otpp)
        console.log("num",number)
        
       
        ottp(otpp,number).then(function (response) {
        
                
                   
            
           

console.log(response);


})
.catch(function (response) {
console.log(response)
});
},[])
const setMontant = (event) =>{
    
    event.preventDefault();
    
    localStorage.setItem('otp-saisie',JSON.stringify(event.target.value));

    

    //console.log('transferts',benif1)

  
}
    
    const classes = useStyles();
  return <div>
      <Typography variant='h5' style={{color: "#999", textAlign:"center", marginTop:"1rem"}}>
      Verification par OTP
      </Typography>
      <form style={{ textAlign:"center" ,margin:"3rem auto"}} className={classes.root}>
         <TextField fullWidth style={{width:"16rem", textAlign:"center"}} label="OTP" helperText="Envoyé par SMS au client " type="text" variant="standard" onChange={(e)=>setMontant(e)} />
      </form>
  </div>;
}

export default OTP;
