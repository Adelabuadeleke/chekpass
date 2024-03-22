import { useState } from 'react';
import './App.css';
import { TextField, FormControl, InputLabel, FilledInput,InputAdornment, IconButton,    } from '@mui/material';
import { VisibilityOutlined ,VisibilityOffOutlined } from '@mui/icons-material';
// import makeStyles from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  input: {
    '&.MuiInput-underline:after': {
      borderBottom: 'none',
    },
    '&.Mui-focused': {
      borderBottom: 'none',
    },
  },
});

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <>
     <section className='checkpass__login flex justify-center items-center min-h-screen'>
      <form action="">
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[496px] bg-blue-200 flex-shrink-0">
           <div className="checkpass__logo ">
          <img src="src/assets/checkpass_logo.png" alt="checkpass logo" className='mb-10'/>
        </div>
        <h1 className='text-[32px] sm:text-3xl md:text-[36px] lg:text-5xl font-[900] lg:font-extrabold mb-12'>Welcome Back!</h1>

        <div className="mb-6 w-full">
         <TextField
         className={classes.input && 'email_input'} 
         sx={{border:1, borderRadius: '4px', borderColor: "#5a5a5a", width: '100%', backgroundColor: '#ffffff'}} id="filled-basic" label="Email*" variant="filled"/>
        </div>
        
        <div className="mb-6 w-full">
          <FormControl  variant="filled" sx={{border:1, borderRadius: '4px', borderColor: "#5a5a5a", width: '100%'}} className={classes.input && 'password_input'}>
            <InputLabel htmlFor="filled-adornment-password">Password*</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        

        <span className="flex justify-end w-full mb-16">
          <a href="" className='font-800'>Forgot password?</a>
        </span>

        <button className='w-full bg-chekpass text-w px-4 py-4 sm:py-4  rounded-4 font-800 mb-26'>Login</button>

        <span className="sign__up">
          <p>Don&apos;t have an account? <a href="" className='font-800'>Sign up</a></p>
        </span>
        </div>
      </form>
     </section>
    </>
  )
}

export default App
