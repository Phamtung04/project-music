import * as yup from 'yup';
import { VALIDATE_CODES } from '../../../constants/validateCode';
import yupGlobal from '../../../yupGlobal';

export const changePasswordSchema = yup.object().shape({
  password: yup.string().min(8, VALIDATE_CODES.E0008(8)).required(VALIDATE_CODES.E0001),
  repeatPassword: yupGlobal.string().passwordConfirm(),
});
