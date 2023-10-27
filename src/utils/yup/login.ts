import * as Yup from 'yup';

export const loginValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .required('Email is requied')
      .email('Email is not valid')
      .max(50, 'Email must be at most 50 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters')
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.>/=^,<\\+$:\]|#;[?*@'})&!"{(%~`_-]).{8,20}/,
        'Password must be at least 8 characters and no more than 20 characters, including numbers, uppercase letters, lowercase letters and special characters'
      ),
    term: Yup.boolean(),
  });
};
