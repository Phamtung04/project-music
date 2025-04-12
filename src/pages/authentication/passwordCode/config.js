import * as yup from 'yup';
import { VALIDATE_CODES } from '../../../constants/validateCode';

export const passwordCodeSchema = yup.object().shape({
    otp: yup.string().required(VALIDATE_CODES.E0001),
});
