import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ForgotPassword from './forgotPassword';
import { forgotSchema } from './config';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../config/apiService/auth';

const ForgotPasswordContainer = () => {
  const navigator = useNavigate();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(forgotSchema),
  });

  const { handleSubmit } = methods;

  const mutation = useMutation({
    mutationFn: AuthService.forgotPassword,
    onSuccess: (data) => {
      navigator('/passwordCode');
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    localStorage.setItem('email_token', data.email);

    console.log(data.email);
  };
  return (
    <FormProvider {...methods}>
      <Box className="w-120 items-center flex flex-col bg-gray-600 shadow-yellow-900-500 rounded-2xl">
        <Typography variant="h4" className="pt-10 text-center font-bold text-white">
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ForgotPassword />
          <Box className="float-right mb-10">
            <Button
              sx={{ color: 'white', mr: 2 }}
              onClick={() => {
                navigator('/login');
              }}
              variant="contained"
            >
              Cancel
            </Button>
            <Button sx={{ color: 'white' }} type="submit" variant="contained">
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default ForgotPasswordContainer;
