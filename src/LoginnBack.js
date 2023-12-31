import React,{useEffect,useState, useRef} from 'react'
import {Link,NavLink} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import logo from '/Users/mac/Desktop/Transfert_National_Front/src/images/logo.webp'
import { useParams,useNavigate} from 'react-router-dom';



import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel
} from "@material-ui/core"

import {loginb} from './Service';



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
        fontSize:"1px"
         
        
        


    }
})
function set_local_storage(data){
    localStorage.setItem('token',data.token);
    localStorage.setItem('id',data.id);
}

const LoginnBack = ()=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useNavigate()

  
  useEffect(()=>{
    if (localStorage.getItem('user-info')){
     
    }
  },[])

  
  
  async function loginm() {

    console.log("hiiiiii")

    let item = {
      email, 
      password
    }
    console.log(item)
    loginb(item).then(function (response) {
        
                
                   
                            set_local_storage(response.data);
                           
                
        console.log(response);
        history("/backOffice")

    })
    .catch(function (response) {
        console.log(response)
    });
  }



  
  const classes = useStyles();

  return (
      
    <div >
     
    <section className='heroL'>
    <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
    <div className='line headline'>___________________________</div>
    
    
    
    
    <div className='single-animation1'>
    <form style={{ textAlign:"center", margin:"3rem"}} className={classes.root}>
    <div className='loginElm'><TextField fullWidth style={{width:"16rem", textAlign:"center"}} size="small" label="Email"  onChange={(e)=>setEmail(e.target.value)} type="text" variant="standard"/></div>
    <div className='loginElm'><TextField fullWidth style={{width:"16rem", textAlign:"center"}} label="Mot de passe"  onChange={(e)=>setPassword(e.target.value)} type="password" variant="standard"/></div>
      <div className='loginElm'><a  className="btn3 " onClick={loginm}>Continuer</a></div>
      </form>
    
    
        </div>
    </section>

    
    </div>
    
   
    
  )
}

export default LoginnBack
