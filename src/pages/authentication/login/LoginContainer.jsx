import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Signin from './Login';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './config';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../config/apiService/auth';

const LoginContainer = () => {
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const mutation = useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      navigate('/home');
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
      <Box className="w-120 items-center flex flex-col shadow-yellow-900-500 bg-gray-600 rounded-2xl">
        <Typography variant="h4" className="pt-10 text-center font-bold text-white">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Signin />
          <Box className="float-right mb-10 text-white">
            <Link to="/forgot-password">Forgot password ?</Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>
        </form>
        <Box>
          <p className="text-white mt-10">
            if you have not account?{' '}
            <Button className="text-blue-300" onClick={() => navigate('/register')}>
              Register
            </Button>
          </p>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default LoginContainer;
