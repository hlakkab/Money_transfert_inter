import React, { useState } from 'react';
import { makeStyles,createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Typography, Button,FormGroup, Switch, colors,Checkbox,FormControlLabel,label} from '@material-ui/core'
import Transaction from './Transaction1';
import Header from './Header';
import Donnees from './Donnees';
import Transfert from './Transfert';
import Transfert1 from './Transfert1';
import OTP from './OTP';
import Check from './Check';
import logo from './images/err.png'

const theme = createTheme({
    typography: {
      fontFamily: 'reg',
      
      
    }
    
  });
const useStyles = makeStyles({
    root : {
         width : "80%",
         margin : "2rem auto",
         border : "1px solid #8a8a8a",
         fontFamily : "reg",
         textAlign:"center",
         "& .MuiStepIcon-root.MuiStepIcon-active": {
             color : "#5fe0a2"
         },
         "& .MuiStepIcon-root.MuiStepIcon-completed": {
             color : "#5fe0a2"
         }
         
        
        


    }
})


const Form1 = () => {

    const [activeStep, setActiveStep] = useState(0);
    //increment the steps
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
    function getSteps(){
        return["Accès à la transaction", "Montant du transfert", "Gestion des frais ", "Finalisation "]
    }


    const steps = getSteps();

    function getStepsContent(stepIndex){
        switch(stepIndex){
            case 0:
                 return <Transaction />;
           
            case 1:
                return <div ><img   src={logo}/> </div>;
            case 2:
                return  <div><img  src={logo}/> </div>;
            
            case 3:
                return     <div><img  src={logo}/> </div> ;
            default : return  <div><img  src={logo}/> </div>;
        }
    }


const classes = useStyles();


  return( <div >
      <Header />
  <ThemeProvider theme={theme}><div className={classes.root}>
      <Stepper  activeStep={activeStep} alternativeLabel>
    {steps.map(label =>(
        <Step key={label}>
            <StepLabel>
                {label}
            </StepLabel>
        </Step>
    )
        )}

      </Stepper>
      <>
      {activeStep === steps.length ? "" : (
          <>
          {getStepsContent(activeStep)}
          <Button onClick={handleNext} style={{fontFamily:"reg",border:".5px solid black", borderRadius :"0px",margin:"1rem",padding:"6px 3rem",letterSpacing:"1px",fontWeight:"900"}}>{activeStep === steps.length-1 ? "Valider le Transfert" : "Suivant"}
</Button>
          </>
      )}
      </>
      
  </div></ThemeProvider></div>
  )
}

export default Form1;
