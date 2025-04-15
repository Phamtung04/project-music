import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ChangePassword from './ChangePassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordSchema } from './config';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../config/apiService/auth';
import { useNavigate } from 'react-router-dom';

const ChangePasswordContainer = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(changePasswordSchema),
  });

  const { handleSubmit } = methods;
  const navigator = useNavigate();

  const mutation = useMutation({
    mutationFn: AuthService.changePassword,
    onSuccess: (data) => {
      navigator('/login');
      localStorage.removeItem('email_token');
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
      <Box className="w-120 items-center flex flex-col bg-gray-600 shadow-yellow-900-500 rounded-2xl">
        <Typography variant="h4" className="pt-10 text-center font-bold text-white">
          Change Password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ChangePassword />
          <Box className="float-right mb-10">
            <Button sx={{ color: 'white', mr: 2 }} variant="contained">
              Cancel
            </Button>
            <Button sx={{ color: 'white' }} type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default ChangePasswordContainer;
