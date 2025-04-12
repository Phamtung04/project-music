import API_PATH from '../../constants/apiPath';
import Api from '../api';

export const AuthService = {
  register: (data) => Api.post(API_PATH.AUTH.REGISTER, data),
  login: (data) => Api.post(API_PATH.AUTH.LOGIN, data),
  forgotPassword: (data) => Api.post(API_PATH.AUTH.FORGOT_PASSWORD, data),
  confirmPassword: (data) => Api.post(API_PATH.AUTH.CONFIRM_PASSWORD, data),
  changePassword: (data) => Api.post(API_PATH.AUTH.CHANGE_PASSWORD, data),
};
