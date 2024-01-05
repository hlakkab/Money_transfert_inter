import React from 'react';
import Header from './Header'

import {DialogActions,Slide, Typography, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import logo from './images/logo.webp'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Login(props) {
 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const {
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        handleChange,
        type
      } = props;
    
      const labelClasses = classNames({
        "labelRootError": error,
        "labelRootSuccess": success && !error
      });
    
      const underlineClasses = classNames({
        "underlineError": error,
        "underlineSuccess": success && !error,
        "underline": true,
        "whiteUnderline": white
      });
    
      const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
      });
    
      const inputClasses = classNames({
        "input": true,
        "whiteInput": white
      });
    
      let formControlClasses = "formControl";
      if (props.formControlProps) {
        formControlClasses = classNames(
          props.formControlProps.className,
          formControlClasses
        );
      };
      



     
  return   <div >
     
      <section className='heroL'>
      <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
      <div className='line headline'>__________________________________</div>
      
      <div className='single-animation'>
      
      <div className='buttons'><a href="/loginn" target="_blank" className=" btn3">Console Agent</a></div>
          </div>
      <div className='single-animation'>
      
      <div className='buttons'><a href="/loginb" target="_blank" className="btn4 ">Console BackOffice</a></div>
          </div>
      </section>
  </div>;
}

export default Login;
