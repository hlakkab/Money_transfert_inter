import React, { useState } from 'react';
import { makeStyles,createMuiTheme,createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Typography, Button,TextField,FormGroup, Switch, colors,Checkbox,FormControlLabel,label} from '@material-ui/core'
import Transaction from './Transaction';
import Header from './Header';
import Donnees from './Donnees';
import Transfert from './Transfert';
import Transfert1 from './Transfert1';
import OTP from './OTP';
import Check from './Check';
import {createT} from './Service';
import { useParams,useNavigate} from 'react-router-dom';
import {ottp} from "./Service"


const theme = createTheme({
    typography: {
      fontFamily: 'reg',
      
      
    }
    
  });
  function set_local_storage(data){
    
    localStorage.setItem('token',data.token);
    localStorage.setItem('id',data.id);
}

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
         
        
        


    },
    roott : {
         
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


const Form = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [id_client, setid] = React.useState("");
    const [sender_fname, setsn] = React.useState("");
    const [sender_lname, setln] = React.useState("");
    const [sender_phnumber, setpn] = React.useState("");
    const [total_amount, setam] = React.useState("");
    const [total_expense_amount, setam1] = React.useState("");
    const [expense_id, setid1] = React.useState("");
    const [finalResult, setFinalResult] = React.useState({});
    const [disable, setDisable] = React.useState(false);
    
    const [motif, setmotif] = React.useState("");
    const [notify_transfer, setNotify] = React.useState(false);
    const [transfers, settransfers] = React.useState([]);
    const history = useNavigate()

    //increment the steps
    
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        let benif = JSON.parse(localStorage.getItem('benif-data'))
        settransfers(benif)
        let total = JSON.parse(localStorage.getItem('montant_total'))

        let totalf = JSON.parse(localStorage.getItem('montant_total_frais'))
            setam1(totalf)

        //setting data for the donner
        let don = JSON.parse(localStorage.getItem('don-data'))
       
            setid(don.id_client)
            setsn(don.sender_fname)
            setln(don.sender_lname)
            setpn(don.sender_phnumber)
            setam(don.total_amount)
            

        let motif = JSON.parse(localStorage.getItem('motif'))
            setmotif(motif)
        let notifytransfer = JSON.parse(localStorage.getItem('notify_transfer'))
            setNotify(notifytransfer)
        console.log('transfert',benif)
        console.log('donneur',don)
        console.log('montant',total)
        console.log('montant_frais',totalf)
        console.log('motif',motif)
        console.log('notify_transfer',notify_transfer)
        let finalResult1={id_client,sender_fname,sender_lname,sender_phnumber,total_amount,total_expense_amount,expense_id,motif,notify_transfer,transfers}
        setFinalResult(finalResult1)
        console.log(finalResult)
        setDisable(JSON.parse(localStorage.getItem('button-state')))


        
    }

    function getSteps(){
        return["Les données de l'opération", "Montant du transfert", "Gestion des frais ","Saisie d'OTP", "Finalisation "]
    }
    function dis(){
        setDisable(true)
    }

    const steps = getSteps();

    function getStepsContent(stepIndex){
        

        switch(stepIndex){

            case 0:
                 return <Donnees />;
            case 1:
                return <Transfert />;
            case 2:
                return <Transfert1 />;
            case 3:
                
               
                return  (<div >
                <Typography variant='h5' style={{color: "#999", textAlign:"center", marginTop:"1rem"}}>
                Verification par OTP
                </Typography>
                <form style={{ textAlign:"center" ,margin:"3rem auto"}} className={classes.roott}>
                   <TextField fullWidth style={{width:"16rem", textAlign:"center"}} label="OTP" helperText="Envoyé par SMS au client " type="text" variant="standard" autoFocus='true' onFocus={dis} onChange={(e)=>setMontant(e)} />
                </form>
            </div>)
            
            case 4:
                
              
                
                    return <Check />;
                

                
            
            default : return "uncknown Step";
        }
    }


const classes = useStyles();
const validate = () =>{
   
    createT(finalResult).then(function (response) {
        
        history("/transferList")


console.log(response);
})
.catch(function (response) {
console.log(response)
});

}

const setMontant = (event) =>{
    
    event.preventDefault();
    
    localStorage.setItem('otp-saisie',JSON.stringify(event.target.value));

    let val1 = JSON.parse(localStorage.getItem('otp'))
    if(val1 === event.target.value){
            setDisable(false)
    }else{
        setDisable(true)
    }


    //console.log('transferts',benif1)

  
}


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
      {activeStep === steps.length ? "Transaction réalisée avec Succès" : (
          <>
          {getStepsContent(activeStep)}
          { activeStep === steps.length-1 
          ?  <Button  onClick={validate} style={{fontFamily:"reg",border:".5px solid black", borderRadius :"0px",margin:"1rem",padding:"6px 3rem",letterSpacing:"1px",fontWeight:"900"}}>Valider le Transfert
          </Button> 
            :<Button disabled={disable} onClick={handleNext} style={{fontFamily:"reg",border:".5px solid black", borderRadius :"0px",margin:"1rem",padding:"6px 3rem",letterSpacing:"1px",fontWeight:"900"}}>Suivant
            </Button>  }
          

          </>
      )}
      </>
      
  </div></ThemeProvider></div>
  )
}

export default Form;
