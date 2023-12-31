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


function AddBeni() {

    const [open, setOpen] = React.useState(false);
    const [receiver_fname, setPrenom] = useState("")
    const [receiver_lname, setNom] = useState("")
    const [receiver_phnumber, setGsm] = useState("")
    const [transfer_amount, setMont] = useState("")
    const [benif,setBenif]= useState([])


    
    const handleClickOpen = () => {
        setOpen(true);
        console.log(benif)
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      
      localStorage.setItem('benif-data',JSON.stringify(benif));
      
     function handleAdd(){
    
        let item = {
            receiver_fname, 
            receiver_lname,receiver_phnumber,transfer_amount
          }
    console.log(item)
    setBenif( arr => [...arr, item]);
    
    console.log(benif)
    setOpen(false);
      };
    

      const classes = useStyles();

      return (
          
        <div>
            <Typography variant='h5' style={{color: "#999", textAlign:"left", margin:"3rem"}}>
        liste des bénéficiaires 
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
        <TableBody>{benif.map(b =>
            <TableRow>
            <TableCell component="th" key={b.prenom} scope="row">
            {b.receiver_fname}
                  </TableCell>
                  <TableCell align="left">{b.receiver_lname}</TableCell>
                  <TableCell align="left">{b.receiver_phnumber}</TableCell>
                  
                </TableRow>)}
        
            </TableBody>
        
        
        </Table></TableContainer>
          <Button  onClick={handleClickOpen} className={classes.root}>
            + Ajouter un bénéficiaire
          </Button>
          <Dialog open={open} onClose={handleClose} className={classes.root}>
           
            <DialogContent>
              <FormHelperText>
                Entrez les informations du nouveau bénéficiaire :
              </FormHelperText>
              <form style={{ textAlign:"center"}} className={classes.root} >
              <Grid  container  >
  
  <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="Prénom "  type="text" variant="standard"  onChange={(e)=>setPrenom(e.target.value)}/>
  </Grid>
  <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="Nom "  type="text" variant="standard" onChange={(e)=>setNom(e.target.value)}/>
  </Grid>
  {/* <Grid item xs={12}>
  <TextField fullWidth style={{width:"16rem", textAlign:"center", margin:" 1rem"}} label="GSM"  type="text" variant="standard"  onChange={(e)=>setGsm(e.target.value)}/>
  </Grid> */}
  <Grid item xs={12}>
  <form style={{ textAlign:"center", margin:"1rem 1rem 3rem"}}>
          <IntlTelInput preferredCountries={["ma"]} onPhoneNumberChange={(b, n, c, number) => {
          setGsm(number)
        }}/>
      </form>
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

export default AddBeni;
