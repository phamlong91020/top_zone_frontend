import SubmitButton, {
  SubmitButtonTheme,
} from '@/components/elements/SubmitButton';
import { ROUTE } from '@/constants/route';
import { loginValidationSchema } from '@/utils/yup/login';
import { Formik } from 'formik';
import { Checkbox, Form, Input } from 'formik-antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import StyledLogin from './styled';
import images from '@/constants/images';

const Login: FC = () => {
  const initialValues = {
    email: '',
    password: '',
    isRemember: true,
  };

  return (
    <StyledLogin>
      <div className="left-signup">
        {/* <div className="banner">
          <img src={images.BACKGROUND_AUTH} alt="BANNER_SIGNUP" />
        </div> */}
      </div>

      <div className="right-signup">
        <div className="form-register">
          <div className="up-layout">
            <div className="topzone-logo">
              <img src={images.TOP_ZONE_LOGO} alt="JIFFY_LOGO" height="100px" />
            </div>
            <h2>Login</h2>
            <div className="have-account">
              <span>Don't have an account?&nbsp;</span>
              <Link to={`/${ROUTE.SIGN_UP}`}>Sign up</Link>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { resetForm }) => {
              // await handleLogin(values);
              resetForm({
                values: {
                  email: '',
                  password: '',
                  isRemember: false,
                },
              });
            }}
            validationSchema={loginValidationSchema()}
          >
            {({ isValid, dirty }) => {
              const isDisableLogin = !isValid || !dirty;
              return (
                <Form className="register-form" colon={false} name="login">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Email"
                    name="email"
                  >
                    <Input
                      size="large"
                      name="email"
                      placeholder="example@gmail.com"
                      suffix={<span />}
                    />
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Password"
                    name="password"
                  >
                    <Input.Password
                      size="large"
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item name="isRemember" className="use-term">
                    <Checkbox name="isRemember" />
                    <div className="text-login">
                      <span>Remember me</span>
                      <Link to={`/${ROUTE.FORGOT_PASSWORD}`}>
                        Forgot password
                      </Link>
                    </div>
                  </Form.Item>
                  <div className="btn-register">
                    <SubmitButton
                      height={50}
                      fontSize={24}
                      theme={
                        isDisableLogin
                          ? SubmitButtonTheme.Disabled
                          : SubmitButtonTheme.BlueWhite
                      }
                      disabled={isDisableLogin}
                      text="Log in"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
