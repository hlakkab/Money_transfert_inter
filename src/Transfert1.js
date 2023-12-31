import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from "react-intl-tel-input"
import "react-intl-tel-input/dist/main.css"
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,FormHelperText,
    InputLabel, Radio,RadioGroup,FormControlLabel,FormLabel
} from "@material-ui/core"
import Header from './Header';
import {ottp} from "./Service"






const Transfert1 = () => {
    const [value, setValue] = React.useState('');
  
  const [total, setTotal] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [num,setNum] = React.useState('');

  const [helperText, setHelperText] = React.useState('Veulliez selectionner un type de frais');
  const [helperText1, setHelperText1] = React.useState('');
  let tot = JSON.parse(localStorage.getItem('montant_total'));
  useEffect(()=>{
        
   makeOTP()
   let don = JSON.parse(localStorage.getItem('don-data'))
   localStorage.setItem('sms',JSON.stringify(don.sender_phnumber))
   
   
    
},[])
  const handleRadioChange = (event) => {

    setValue(event.target.value);
    setTotal(tot)
     setHelperText('Appuyez sur + pour voir le montant total');
     setHelperText1(' ');

   

  };
  function sendOtp(){
    console.log("workinnnng")
     let number = JSON.parse(localStorage.getItem('sms'))
     let otpp = JSON.parse(localStorage.getItem('otp'))
     ottp(otpp,number).then(function (response) {
    
            
               
        
       

         console.log(response);
        
        
         })
         .catch(function (response) {
         console.log(response)
         });
}
  const makeOTP = () =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      localStorage.setItem('otp',JSON.stringify(result))

      
}


    const handleSubmit = (event) => {
        event.preventDefault();
        sendOtp()
   

        if (value === 'a') {
            setTotal(parseInt(tot)+((3*parseInt(tot))/100));
            setHelperText('Montant total d’op = Montant saisie + Frais du transfert  ');
            setHelperText1('Montant du transfert = Montant de l’opération saisie');
            localStorage.setItem('montant_total_frais',JSON.stringify(parseInt(tot)+((3*parseInt(tot))/100)));


          } else if (value === 'b') {
            setTotal(parseInt(tot));

            setHelperText('Montant total d’op = Montant saisie');
            setHelperText1('Montant du transfert = Montant d’op - frais du transfert ');
            localStorage.setItem('montant_total_frais',JSON.stringify(parseInt(tot)));

            
          }else{
            setHelperText('Veulliez selectionner un type de frais ');

          }

          console.log(total)

    }
       
     
     


    
  return( <div>
      
      <Typography variant='h5' style={{color: "#999", textAlign:"center", margin:"1rem 1rem 3rem"}}>
      Calcule des Frais
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid  container  style={{ textAlign:"center"}}>
  
  
      
    <Grid item xs={4}>
    <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        preferedvalue="a"
        name="radio-buttons-group"
        onChange={handleRadioChange}
        style={{fontSize: "4", margin:"0 0 0 1rem"}}
      >
        <FormControlLabel value="a" control={<Radio  color="default" size="small"  /> } label="la charge du client d’donneur "    />
        <FormControlLabel value="b" control={<Radio  color="default"  size="small" />} label="la charge du client bénéficiaire " />
       

      </RadioGroup>
      
        
    </FormControl>
  </Grid>
    <Grid item xs={4} >
    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" style={{borderRadius:"5rem", textAlign:"center", margin:"3rem -1rem"}}>
          +
        </Button>
  </Grid>
    <Grid item xs={4}  style={{ textAlign:"center"}}>
    <div>____________________________________________</div>
    <FormHelperText style={{ textAlign:"center"}}>{helperText}</FormHelperText>
    <FormHelperText style={{ textAlign:"center"}}>{helperText1}</FormHelperText>
    <div>Total = {total}</div>
  </Grid>
    </Grid>
    </form>
    

      </div>
  )}

export default Transfert1;
