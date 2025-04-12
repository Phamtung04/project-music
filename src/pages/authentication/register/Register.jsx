import React from 'react';
import CustomTextField from './../../../components/textField/CustomTextField';
import { Box } from '@mui/material';
import CustomSelectField from './../../../components/textField/CustomSelectField';

const Register = () => {
  return (
    <Box className="my-5">
      <Box>
        <Box className="my-10 h-15">
          <CustomTextField
            className={'w-80'}
            name="fullName"
            label="fullName"
            variant="outlined"
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
            name="email"
            label="Email"
            variant="outlined"
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
          <CustomSelectField
            name="gender"
            label="Gender"
            options={[
              { value: 'Nam', label: 'Nam' },
              { value: 'Nu', label: 'Nữ' },
            ]}
            sx={{
              width: '96%',
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& .MuiSelect-select': { color: 'white' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              },
              '& .MuiSvgIcon-root': { color: 'white' },
              '& .MuiPaper-root': { backgroundColor: '#333' },
              '& .MuiMenuItem-root': { color: 'white' },
            }}
          />
        </Box>
        <Box className="my-10 h-15">
          <CustomTextField
            className={'w-80'}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
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
        <Box className="my-10 h-15">
          <CustomTextField
            className={'w-80'}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
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
    </Box>
  );
};

export default Register;
