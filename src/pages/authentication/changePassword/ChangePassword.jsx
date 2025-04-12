import { Box } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../components/textField/CustomTextField'

const ChangePassword = () => {
  return (
    <Box className="my-5">
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
            name="repeatPassword"
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
  )
}

export default ChangePassword