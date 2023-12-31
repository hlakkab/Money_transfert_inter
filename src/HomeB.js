import React from 'react';
import Header from './Header'
import {DialogActions,Slide, Typography, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import Header1 from './Header1';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Home1() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return <div >
      <Header1 />
      <section className='hero'>
      <div className='headline animationUp'>Back Office</div>
      <div className='line headline'>_____________________________________</div>
      <div className='single-animation'>
      
      <div className='buttons' ><a href='/transferListB'  className="btn2 cta-btn">Gestion des Transferts</a></div>
          </div>
          
      
      </section>
  </div>;
}

export default Home1;
