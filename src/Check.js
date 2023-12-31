import React from 'react';
import { makeStyles,createMuiTheme, ThemeProvider,styled } from '@material-ui/core/styles';

import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,FormControlLabel
} from "@material-ui/core"

const useStyles = makeStyles({
    root : {
         
         
         "& .Mui-checked": {
           
            color : "#5fe0a2"
        }
         
        
        


    }
})

function Check() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    localStorage.setItem('notify_transfer',JSON.stringify(checked));

  return <div>
      <FormControlLabel control={<Checkbox onChange={e=>setChecked(e.target.checked)} checked={checked} defaultChecked color="default" />} label="Notification du transfert"  className={classes.root}/>
  </div>;
}

export default Check;
