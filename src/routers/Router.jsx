import React from 'react'
import { useRoutes } from 'react-router-dom';
import DashboardLayoutAccountSidebar from '../layout/home/DashboardLayoutAccountSidebar';
import TrangChu from '../pages/home/trangChu/TrangChu';
import GenreListPage from '../pages/categoryList/GenreListPage';
import PersonaPlaylist from './../pages/personalPlaylist/PersonaPlaylist';
import RegisterContainer from '../pages/authentication/register/RegisterContainer';
import LoginContainer from '../pages/authentication/login/LoginContainer';
import Authentication from '../layout/authentication/Authentication';
import ForgotPasswordContainer from './../pages/authentication/forgotPassword/ForgotPasswordContainer';
import PasswordCodeContainer from '../pages/authentication/passwordCode/PasswordCodeContainer';
import ChangePasswordContainer from '../pages/authentication/changePassword/ChangePasswordContainer';

const Router = () => {
    const element = useRoutes([
        {
            element: <Authentication/>,
            children: [
                {
                    path: '/',
                    element: <LoginContainer/>
                },
                {
                    path: '/login',
                    element: <LoginContainer />
                },
                {
                    path: '/register',
                    element: <RegisterContainer />
                },
                {
                    path: '/forgot-password',
                    element: <ForgotPasswordContainer />
                },
                {
                    path: '/passwordCode',
                    element: <PasswordCodeContainer />
                },
                {
                    path: '/changePassword',
                    element: <ChangePasswordContainer/>
                }
            ]
        },
        {
            element: <DashboardLayoutAccountSidebar/>,
            children: [
                {
                    path: '/home',
                    element: <TrangChu />
                },
                {
                    path: '/home',
                    element: <TrangChu/>
                },
                {
                    path: '/playlist',
                    element: <PersonaPlaylist />
                },
                {
                    path: '/genre/:genreName',
                    element: <GenreListPage/>
                }
            ]
        }
    ]);
  return element;
}
export default Router;