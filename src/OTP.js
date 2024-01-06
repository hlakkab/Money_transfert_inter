import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ottp } from "./Service";

const useStyles = makeStyles({
  root: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#5fe0a2",
    },
    "& .MuiInput-underline.Mui-focused:after": {
      borderBottom: "2px solid #5fe0a2",
      color: "#5fe0a2",
    },
    "& .MuiInput-underline.Mui-focused:before": {
      borderBottom: "2px solid #5fe0a2",
      color: "#5fe0a2",
    },
  },
  mainContainer: {
    padding: '1rem',
    border: '1px solid rgb(46, 14, 88)',
    backgroundColor: 'rgb(226, 215, 240)',
  },
});

function OTP() {
  const [otp, setOtp] = useState('');
  const [num, setNum] = useState('');

  useEffect(() => {
    let number = JSON.parse(localStorage.getItem('sms'));
    let otpp = JSON.parse(localStorage.getItem('otp'));

    ottp(otpp, number)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);

  const setMontant = (event) => {
    event.preventDefault();
    localStorage.setItem('otp-saisie', JSON.stringify(event.target.value));
  };

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div>
        <Typography variant='h5' style={{ color: "rgb(46, 14, 88)", textAlign: "center", margin: "3rem", fontWeight: "bold" }}>
          Verification par OTP
        </Typography>

        <form style={{ textAlign: "center", margin: "3rem auto" }} className={classes.root}>
          <TextField fullWidth style={{ width: "16rem", textAlign: "center" }} label="OTP" helperText="Envoyé par SMS au client " type="text" variant="standard" onChange={(e) => setMontant(e)} />
        </form>
      </div>
    </div>
  );
}

export default OTP;
