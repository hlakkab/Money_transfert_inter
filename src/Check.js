import React from 'react';
import { makeStyles,createMuiTheme, ThemeProvider,styled } from '@material-ui/core/styles';

import {
    Typography,
    Paper,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,FormControlLabel
} from "@material-ui/core"

// const useStyles = makeStyles({
//     root : {
         
         
//          "& .Mui-checked": {
           
//             color : "#5fe0a2"
//         }
         
        
        


//     }
// })
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Check() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    localStorage.setItem('notify_transfer',JSON.stringify(checked));

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h2" gutterBottom>
                Finalisation
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" component="h3">
                            Données du donneur
                        </Typography>
                        <p>Nom: Salah</p>
                        <p>Email: Salah@gmail.com</p>
                        {/* Ajoutez d'autres champs si nécessaire */}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" component="h3">
                            Données de l'utilisateur
                        </Typography>
                        <p>Nom: Sami</p>
                        <p>Email: Sami@gmail.com</p>
                        {/* Ajoutez d'autres champs si nécessaire */}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" component="h3">
                            Montants
                        </Typography>
                        <p>Montant du transfert: 1000</p>
                        <p>Frais: 10</p>
                        {/* Ajoutez d'autres champs si nécessaire */}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
/* <div>
    <FormControlLabel control={<Checkbox onChange={e=>setChecked(e.target.checked)} checked={checked} defaultChecked color="default" />} label="Notification du transfert"  className={classes.root}/>
    </div> */
}

export default Check;
