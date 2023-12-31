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
    FormControl,
    InputLabel,DialogActions, DialogContent, Dialog, DialogContentText, DialogTitle,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper
} from "@material-ui/core"
import AddBeni from './AddBeni';




const Donnees = () => {
  const [open, setOpen] = React.useState(false);
  const [id_client, setid] = React.useState("");
  const [expense_id, setid1] = React.useState("");
  const [sender_fname, setsn] = React.useState("");
  const [sender_lname, setln] = React.useState("");
  const [sender_phnumber, setpn] = React.useState("");
  const [total_amount, setam] = React.useState("");
  const [total_expense_amount, setam1] = React.useState("");
  const [motif, setmotif] = React.useState("");
  const [transfers, settransfers] = React.useState([]);

  
  const clients = [
    { id_client: '2',
     expense_id: '2',
      sender_fname: 'meriem',
      sender_lname:'beriane',
      sender_phnumber:'0611022644',
      total_amount:'700',
      
      

     },]
     let item = clients[0]

  useEffect(()=>{
    
    console.log(item)
  },[])
   
  localStorage.setItem('don-data',JSON.stringify(item));

  return( <div>
      
      <Typography variant='h5' style={{color: "#999", textAlign:"left", margin:"3rem"}}>
      Les Données du Client Donneur
      </Typography>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Prénom</TableCell>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">GSM</TableCell>
            <TableCell align="left">Date de naissance</TableCell>
            <TableCell align="left">Compte (DHS)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {clients.map(cl =>
          <TableRow>
             <TableCell component="th" scope="row" >
               {cl.sender_fname}
              </TableCell>
              <TableCell align="left"  onChange={(e)=>setln(e.target.value)}>{cl.sender_lname}</TableCell>
              <TableCell align="left">meriem@gmail.com</TableCell>
              <TableCell align="left">EE645499</TableCell>
              <TableCell align="left" >{cl.sender_phnumber}</TableCell>
              <TableCell align="left">11/03/1999</TableCell>
              <TableCell align="left" >{cl.total_amount}</TableCell></TableRow>
            )}
        
            
            </TableBody>
        
        
        </Table></TableContainer>
        
        <h2><AddBeni /></h2>
        
      </div>
  )}

export default Donnees;
