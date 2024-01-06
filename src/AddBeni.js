import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Dialog, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Grid, Button, FormHelperText, DialogActions } from '@material-ui/core';

import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const useStyles = makeStyles({
  root: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#8E44AD",
    },
    "& .MuiInput-underline.Mui-focused:after": {
      borderBottom: "2px solid #8E44AD",
      color: "#8E44AD",
    },
    "& .MuiInput-underline.Mui-focused:before": {
      borderBottom: "2px solid #8E44AD",
      color: "#8E44AD",
    },
    color: "#8E44AD",
    fontSize: "11px",
    fontFamily: "reg",
  },
  attractiveButton: {
    backgroundColor: 'rgb(46, 14, 88)',
    color: '#fff',
    padding: '8px 16px', // Adjust the padding to make it smaller
    borderRadius: '5px',
    fontSize: '12px', // Adjust the font size to make it smaller
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgb(36, 10, 68)',
    },
  },
  
  mainContainer: {
    padding: '1rem', // Adjusted padding for a smaller card
    backgroundColor: 'rgb(255,255, 255)',
    
    border: '1px solid rgb(46, 14, 88)',

  }
});

function AddBeni() {
  const [open, setOpen] = useState(false);
  const [receiver_fname, setPrenom] = useState("");
  const [receiver_lname, setNom] = useState("");
  const [receiver_phnumber, setGsm] = useState("");
  const [benif, setBenif] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(benif);
  };

  const handleClose = () => {
    setOpen(false);
  };

  localStorage.setItem('benif-data', JSON.stringify(benif));

  function handleAdd() {
    let item = {
      receiver_fname,
      receiver_lname,
      receiver_phnumber,
    };
    console.log(item);
    setBenif((arr) => [...arr, item]);
    console.log(benif);
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>

    <div>
     <Typography variant='h5' style={{ color: "rgb(46, 14, 88)", textAlign: "center", margin: "3rem", fontWeight: "bold" }}>
  Liste des bénéficiaires
</Typography>


      <TableContainer component={Paper}>
        <Table sx={{ width: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Prénom</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">GSM</TableCell>
              <TableCell align="left">_____</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {benif.map((b, index) => (
              <TableRow key={index}>
                <TableCell>{b.receiver_fname}</TableCell>
                <TableCell align="left">{b.receiver_lname}</TableCell>
                <TableCell align="left">{b.receiver_phnumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleClickOpen} className={`${classes.root} ${classes.attractiveButton}`}>
        + Ajouter un bénéficiaire
      </Button>
      <Dialog open={open} onClose={handleClose} className={classes.root}>
        <FormHelperText>Entrez les informations du nouveau bénéficiaire :</FormHelperText>
        <form style={{ textAlign: "center" }} className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                style={{ width: "16rem", textAlign: "center", margin: " 1rem" }}
                label="Prénom"
                type="text"
                variant="standard"
                onChange={(e) => setPrenom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                style={{ width: "16rem", textAlign: "center", margin: " 1rem" }}
                label="Nom"
                type="text"
                variant="standard"
                onChange={(e) => setNom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <form style={{ textAlign: "center", margin: "1rem 1rem 3rem" }}>
                <IntlTelInput
                  preferredCountries={["ma"]}
                  onPhoneNumberChange={(b, n, c, number) => {
                    setGsm(number);
                  }}
                />
              </form>
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={handleAdd} className={classes.attractiveButton}>
              Enregistrer
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
    </div>
  );
}

export default AddBeni;
