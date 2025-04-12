import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordCodeSchema } from './config';
import { useNavigate } from 'react-router-dom';
import PasswordCode from './PasswordCode';
import { AuthService } from '../../../config/apiService/auth';
import { useMutation } from '@tanstack/react-query';

const PasswordCodeContainer = () => {
  const navigator = useNavigate();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(passwordCodeSchema),
  });

  const { handleSubmit } = methods;

  const mutation = useMutation({
    mutationFn: AuthService.confirmPassword,
    onSuccess: (data) => {
      navigator('/changePassword');
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    const email = localStorage.getItem('email_token');

    const responseBody = { email, ...data };
    mutation.mutate(responseBody);
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Box className="w-120 items-center flex flex-col bg-gray-600 shadow-yellow-900-500">
        <Typography variant="h4" className="pt-10 text-center font-bold text-white">
          Password code
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PasswordCode />
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

export default PasswordCodeContainer;
