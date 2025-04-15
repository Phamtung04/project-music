import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Register from './Register';
import { registerSchema } from './config';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from './../../../config/apiService/auth';

const RegisterContainer = () => {
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const { handleSubmit } = methods;

  const mutation = useMutation({
    mutationFn: AuthService.register,
    onSuccess: (data) => {
      navigate('/login');
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box className="w-120 items-center flex flex-col bg-gray-600 shadow-yellow-900-500 rounded-2xl">
        <Typography variant="h4" className="pt-10 text-center font-bold text-white">
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Register />
          <Button
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700"
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </form>

        <Box className="flex flex-col gap-2 items-center justify-center my-5 text-white">
          <p>
            if you have already account?{' '}
            <button className="text-blue-300" onClick={() => navigate('/login')}>
              Login
            </button>
          </p>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default RegisterContainer;
