import { Box } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../components/textField/CustomTextField'

const ForgotPassword = () => {
  return (
    <Box className="my-10 h-15">
        <CustomTextField
          className={'w-80'}
          name="email"
          label="Email"
          placeholder="Nhập địa chỉ email để lấy lại mật khẩu"
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
  )
}

export default ForgotPassword