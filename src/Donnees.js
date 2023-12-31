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
import AddClient from './AddClient';




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
 

  return( <div>
      
      
        
        <h2><AddClient /></h2>
        <h2><AddBeni /></h2>
        
      </div>
  )}

export default Donnees;
