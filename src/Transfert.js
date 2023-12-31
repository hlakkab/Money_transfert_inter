import React,{useEffect,useState} from 'react';
import { makeStyles,createMuiTheme, ThemeProvider,styled } from '@material-ui/core/styles';

import {
    Typography,
    Button,Box,
    Grid,
    Checkbox,
    TextField,FormHelperText,
    OutlinedInput,
    FormControl,
    InputLabel,Select,MenuItem
} from "@material-ui/core"

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

const Transfert = () => {
    const [mont,setMont]=useState(0);
    const [motif,setMotif]=useState("");
    const [benif1,setBenif1]=useState([]);
    const [textInputError,setError]=useState('');
    const [textInputErrorMessage,setErrorText]=useState('');
    
    let benif = JSON.parse(localStorage.getItem('benif-data'));
    useEffect(()=>{
      
       console.log(benif)
       

        // benif[0].mont = '123123'
        // console.log(benif[0].mont)
        // console.log(benif)
        

    },[])
    const setMontant = (event,index) =>{
        let total=0;
        event.preventDefault();
        
        benif[index].transfer_amount = event.target.value
        console.log(benif)
        localStorage.setItem('benif-data',JSON.stringify(benif));

        //setBenif1(benif)
        benif.map(b=> total=total + parseInt(b.transfer_amount))
        console.log(total)
       
        localStorage.setItem('montant_total',total);
        if(parseInt(total) >= 2000){
          setError('le montant depasse le plafond')
        }else{
          setError('')
        }

        //console.log('transferts',benif1)

      
    }
    const handleChange = (event) => {
        setMotif(event.target.value);
      };
      console.log(motif)

    localStorage.setItem('motif',JSON.stringify(motif));

    const classes = useStyles();
  return <div>
      <Typography variant='h5' style={{color: "#999", textAlign:"center", marginTop:"1rem"}}>
      Montants Du Transfert
      </Typography>    <FormHelperText style={{ textAlign:"center"}}>Entrez le montant correspondant à chaque bénéficiaire</FormHelperText>

      <form style={{ textAlign:"center" ,margin:"3rem auto"}} className={classes.root}>
        
          {benif.map((b,index) => <TextField  fullWidth style={{width:"16rem",margin:"0 1rem", textAlign:"center"}} label={b.receiver_lname} helperText="(DHS)"  type="number" onChange={(e)=>setMontant(e,index)} variant="standard"/>
            )}
         <FormHelperText error style={{ textAlign:"center" ,margin:"3rem auto"}}>{textInputError}</FormHelperText>
      </form>
      <Box sx={{ maxWidth: 300 }} style={{ textAlign:"center" ,margin:"3rem auto"}}>
      <FormControl fullWidth className={classes.root} >
        <InputLabel  className={classes.root}>Motif</InputLabel>
        <Select 
          onChange={e => setMotif(e.target.value)}
          value={motif}
          label="Motif"
          
        >
          <MenuItem value="Soutien familial">Soutien familial</MenuItem>
          <MenuItem value="Epargne/investissement ">Epargne/investissement </MenuItem>
          <MenuItem value="Cadeau">Cadeau</MenuItem>
          <MenuItem value="Frais de dépassement ">Frais de dépassement </MenuItem>
          <MenuItem value="Frais d’éducation">Frais d’éducation </MenuItem>
        </Select>
      </FormControl>
    </Box>
  </div>;
}

export default Transfert;
