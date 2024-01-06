import React, { useState } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';
import Transaction from './Transaction';
import Header from './Header';
import Donnees from './Donnees';
import Transfert from './Transfert';
import Transfert1 from './Transfert1';
import OTP from './OTP';
import Check from './Check';
import { createT } from './Service';
import { useParams, useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'reg',
  },
  palette: {
    primary: {
      main: '#8e44ad', // Violet color
    },
    secondary: {
      main: '#9b59b6', // Another shade of violet
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '2rem auto',
    padding: '1.5rem',
    border: `2px solid rgb(46, 14, 88)`,
    borderRadius: '10px',
    textAlign: 'center',
     
  },
  textA:{
    backgroundColor:'rgb(226, 215, 240)',
    width: '80%',
    margin: '2rem auto',
    padding: '1.5rem',
    border: `2px solid rgb(46, 14, 88)`,
    borderRadius: '10px',
    textAlign: 'center'
  },
  stepLabel: {
    color: theme.palette.primary.main,
  },
  button: {
    fontFamily: 'reg',
    border: '2px solid rgb(46, 14, 88)', // Border color
    borderRadius: '8px', // Increased border-radius
    margin: '1rem',
    padding: '12px 32px', // Adjusted padding
    letterSpacing: '1px',
    fontWeight: 'bold', // Bold text
    backgroundColor: 'rgb(226, 215, 240)', // Background color
    color: 'rgb(46, 14, 88)', // Text color
    '&:hover': {
      backgroundColor: '#6c3483', // Darker shade of violet on hover
      color: '#fff', // Text color on hover
    },
  },
  mainContainer: {
    padding: '1rem', // Adjusted padding for a smaller card
    backgroundColor:'rgb(255,255,255)',
    border: '1px solid rgb(46, 14, 88)',

  },
  formControl: {
    margin: '1rem 0',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(46, 14, 88)', // Outline color
      },
      '&:hover fieldset': {
        borderColor: '#6c3483', // Outline color on hover
      },
    },
  },
}));

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [id_client, setid] = React.useState('');
  const [sender_fname, setsn] = React.useState('');
  const [sender_lname, setln] = React.useState('');
  const [sender_phnumber, setpn] = React.useState('');
  const [total_amount, setam] = React.useState('');
  const [total_expense_amount, setam1] = React.useState('');
  const [expense_id, setid1] = React.useState('');
  const [finalResult, setFinalResult] = React.useState({});
  const [disable, setDisable] = React.useState(false);
  const [motif, setmotif] = React.useState('');
  const [notify_transfer, setNotify] = React.useState(false);
  const [transfers, settransfers] = React.useState([]);
  const history = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    let benif = JSON.parse(localStorage.getItem('benif-data'));
    settransfers(benif);
    let total = JSON.parse(localStorage.getItem('montant_total'));

    let totalf = JSON.parse(localStorage.getItem('montant_total_frais'));
    setam1(totalf);

    let don = JSON.parse(localStorage.getItem('don-data'));
    setid(don.id_client);
    setsn(don.sender_fname);
    setln(don.sender_lname);
    setpn(don.sender_phnumber);
    setam(don.total_amount);

    let motif = JSON.parse(localStorage.getItem('motif'));
    setmotif(motif);
    let notifytransfer = JSON.parse(localStorage.getItem('notify_transfer'));
    setNotify(notifytransfer);

    let finalResult1 = {
      id_client,
      sender_fname,
      sender_lname,
      sender_phnumber,
      total_amount,
      total_expense_amount,
      expense_id,
      motif,
      notify_transfer,
      transfers,
    };
    setFinalResult(finalResult1);
    setDisable(JSON.parse(localStorage.getItem('button-state')));
  };

  function getSteps() {
    return [
      <span style={{ color: 'rgb(46, 14, 88)', fontWeight: 'bold', fontSize: '1.2rem' }}>Les données de l'opération</span>,
      <span style={{ color: 'rgb(46, 14, 88)', fontWeight: 'bold', fontSize: '1.2rem' }}>Montant du transfert</span>,
      <span style={{ color: 'rgb(46, 14, 88)', fontWeight: 'bold', fontSize: '1.2rem' }}>Gestion des frais</span>,
      <span style={{ color: 'rgb(46, 14, 88)', fontWeight: 'bold', fontSize: '1.2rem' }}>Saisie d'OTP</span>,
      <span style={{ color: 'rgb(46, 14, 88)', fontWeight: 'bold', fontSize: '1.2rem' }}>Finalisation</span>,
    ];
  }
  
  

  function dis() {
    setDisable(true);
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Donnees />;
      case 1:
        return <Transfert />;
      case 2:
        return <Transfert1 />;
      case 3:
        return (
          <div className={classes.mainContainer}>
          <div>
  <Typography variant="h5" style={{ color: " rgb(46, 14, 88)", textAlign: "center", margin: "3rem", fontWeight: "bold" }}>
    Verification par OTP
  </Typography>
  <form style={{ textAlign: "center", margin: "3rem auto" }} className={classes.textA}>
    <TextField
      fullWidth
      label="OTP"
      helperText="Envoyé par SMS au client "
      type="text"
      variant="standard"
      autoFocus
      onChange={(e) => setMontant(e)}
    />
  </form>
</div>
</div>

        );
      case 4:
        return <Check donneurData={finalResult} beneficiaires={transfers} montantTransaction={total_amount} />;
        default:
        return 'uncknown Step';
    }
  }

  const classes = useStyles();

  const validate = () => {
    createT(finalResult)
      .then(function (response) {
        history('/transferList');
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  const setMontant = (event) => {
    event.preventDefault();
    localStorage.setItem('otp-saisie', JSON.stringify(event.target.value));

    let val1 = JSON.parse(localStorage.getItem('otp'));
    if (val1 === event.target.value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div >
      <Header />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className={classes.stepLabel}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              'Transaction réalisée avec Succès'
            ) : (
              <>
                {getStepsContent(activeStep)}
                {activeStep === steps.length - 1 ? (
                  <Button
                    onClick={validate}
                    className={classes.button}
                  >
                    Valider le Transfert
                  </Button>
                ) : (
                  <Button
                    disabled={disable}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Suivant
                  </Button>
                )}
              </>
            )}
          </>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Form;
