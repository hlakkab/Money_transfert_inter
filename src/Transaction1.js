import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  Button,
  FormHelperText,
} from '@material-ui/core';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import Header from './Header';
import { search, searchB } from './Service';
import searchh from './images/searchh.png';
import AddBeni from './AddBeni';

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
  tableContainer: {
    backgroundColor: 'rgb(226, 215, 240)',
    border: '1px solid rgb(46, 14, 88)', // Ajout de la bordure
  },
  table: {
    width: '100%',
    border: '1px solid rgb(46, 14, 88)', // Ajout de la bordure
  },
  tableHead: {
    backgroundColor: 'rgb(46, 14, 88)',
    color: '#fff',
  },
});

const Transaction1 = () => {
  const classes = useStyles();
  const [cin, setCin] = useState("");
  const [benii, setBenii] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [id_client, setid] = React.useState("1");
  const [expense_id, setid1] = React.useState("1");
  const [sender_fname, setsn] = React.useState("");
  const [sender_lname, setln] = React.useState("");
  const [sender_phnumber, setpn] = React.useState("");
  const [total_amount, setam] = React.useState("10000");
  const [total_expense_amount, setam1] = React.useState("");
  const [motif, setmotif] = React.useState("");
  const [transfers, settransfers] = React.useState([]);
  const [client, setClient] = useState({});
  const [donn, setDonn] = useState({});
  const [CIN, setCIN] = useState("");
  const [disable, setDisable] = useState("true");
  const [receiver_fname, setPrenom] = useState("");
  const [receiver_lname, setNom] = useState("");
  const [receiver_phnumber, setGsm] = useState("");
  const [transfer_amount, setMont] = useState("");
  const [benif, setBenif] = useState([]);

  useEffect(() => {}, []);

  async function searchC() {
    search(cin)
      .then(function (response) {
        console.log(response);
        setClient(response.data);
        localStorage.setItem('donneur', JSON.stringify(response.data));

        searchB(response.data.id)
          .then(function (response) {
            console.log(response);
            setBenii(response.data);
            localStorage.setItem('benific', JSON.stringify(response.data));
            let benif = JSON.parse(localStorage.getItem('benific'));
          })
          .catch(function (response) {
            console.log(response);
          });
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  return (
    <div>
      <Typography variant='h5' style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}>
        Accès à la transaction
      </Typography>
      <form style={{ textAlign: "center", margin: "3rem" }} className={classes.root}>
        <TextField
          fullWidth
          style={{ width: "16rem", textAlign: "center" }}
          label="Carte ID"
          onChange={(e) => setCin(e.target.value)}
          type="text"
          variant="standard"
        />
        <Button onClick={searchC} className={classes.root}>
          <img className="search" src={searchh} />
        </Button>
      </form>
      <Typography variant="h5" style={{ color: "rgb(46, 14, 88)", textAlign: "center", margin: "3rem", fontWeight: "bold" }}>
  Les Données du Client Donneur
</Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ width: 50 }} aria-label="simple table" className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Prénom</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">GSM</TableCell>
              <TableCell align="left">CIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {client.firstName}
              </TableCell>
              <TableCell align="left">{client.lastName}</TableCell>
              <TableCell align="left">{client.phoneNumber}</TableCell>
              <TableCell align="left">{client.idCard}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant='h5' style={{ color: "rgb(46, 14, 88)", textAlign: "center", margin: "3rem", fontWeight: "bold" }}>
  Liste des bénéficiaires
</Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ width: 50 }} aria-label="simple table" className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Prénom</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">GSM</TableCell>
              <TableCell align="left">_____</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {benii.map((b) => (
              <TableRow>
                <TableCell component="th" key={b.firstName} scope="row">
                  {b.firstName}
                </TableCell>
                <TableCell align="left">{b.lastName}</TableCell>
                <TableCell align="left">{b.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Transaction1;
