import { Box } from '@mui/material';
import React from 'react';
import CustomTextField from '../../../components/textField/CustomTextField';

const Signin = () => {
  // const navigate = useNavigate();
  return (
    // <div className="flex gap-2 items-center justify-center my-5">
    //   <p>if you have already account?</p>
    //   <button onClick={() => navigate('/register')}>Register</button>
    // </div>
    <Box>
      <Box className="my-10 h-15">
        <CustomTextField
          className={'w-80'}
          name="email"
          label="Email"
          placeholder="Email"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { color: 'white' },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
      </Box>

      <Box className="my-5 h-15">
        <CustomTextField
          className={'w-80'}
          type="password"
          name="password"
          label="password"
          placeholder="*********"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { color: 'white' },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Signin;
