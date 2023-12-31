import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,DialogActions, DialogContent, Dialog,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, TextField,Grid, Button,DialogContentText, DialogTitle, FormHelperText} from '@material-ui/core'
import IntlTelInput from "react-intl-tel-input"
import "react-intl-tel-input/dist/main.css"


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
        },
        color : "#5fe0a2",
        fontSize:"11px",
        fontFamily:"reg"
         
        
        


    }
})


function AddClient() {

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
  const [client,setClient]= useState({})
  const [CIN,setCIN]= useState("")
  const [disable,setDisable]= useState("true")


    
    const handleClickOpen = () => {
        setOpen(true);
        console.log(client)
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      
      localStorage.setItem('don-data',JSON.stringify(client));
      
     function handleAdd(){
    
        let item = {
          id_client,
          expense_id,
           sender_fname,
           sender_lname,
           sender_phnumber,
           total_amount,CIN
          }
    console.log(item)
    setClient(item);
    
    console.log(client)
    setOpen(false);
    setDisable("false")
      };
    

      const classes = useStyles();

      return (
          
        <div>
            <Typography variant='h5' style={{color: "#999", textAlign:"left", margin:"3rem"}}>
            Les Données du Client Donneur      </Typography>
       
        <TableContainer component={Paper}>
      <Table sx={{ width: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
         
            <TableCell >Prénom</TableCell>
            <TableCell align="left">Nom</TableCell>
            
            <TableCell align="left">GSM</TableCell>
            <TableCell align="left">CIN</TableCell>
            
          </TableRow>
        </TableHead>
            
          
         
        <TableBody>
            <TableRow>
            <TableCell component="th" scope="row">
            {client.sender_fname}
                  </TableCell>
                  <TableCell align="left">{client.sender_lname}</TableCell>
                  
                  <TableCell align="left">{client.sender_phnumber}</TableCell>
                  <TableCell align="left">{client.CIN}</TableCell>
                  
                </TableRow>
        
            </TableBody>
        
        
        </Table></TableContainer>
        <>
        {disable === "true" ? (<Button  onClick={handleClickOpen} className={classes.root}>
            + Ajouter un client prospect
          </Button>) :( <Button disabled onClick={handleClickOpen} className={classes.root}>
            + Ajouter un client prospect
          </Button>)

        }
        </>
          
          <Dialog open={open} onClose={handleClose} className={classes.root}>
           
            <DialogContent>
              <FormHelperText>
                Entrez les informations du client :
              </FormHelperText>
              <form style={{ textAlign:"center"}} className={classes.root} >
              <Grid  container  >
              
  <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="CIN"  type="text" variant="standard"  onChange={(e)=>setCIN(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="Prénom"  type="text" variant="standard"  onChange={(e)=>setsn(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="Nom"  type="text" variant="standard" onChange={(e)=>setln(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="GSM"  type="text" variant="standard" onChange={(e)=>setpn(e.target.value)}/>

        
      
  {/* <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:"0 1rem"}} label="GSM"  type="text" variant="standard"  onChange={(e)=>setpn(e.target.value)}/> */}
  </Grid>
  
  
  
  </Grid>
  <DialogActions>
             
              <Button onClick={handleAdd}>Enregistrer</Button>
            </DialogActions></form>
            </DialogContent>
            
          </Dialog>
        </div>
      );
}

export default AddClient;
