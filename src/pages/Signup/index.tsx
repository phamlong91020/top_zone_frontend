import { ROUTE } from '@/constants/route';
import { Formik } from 'formik';
import { Checkbox, Form, Input } from 'formik-antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import StyledLogin from '../Login/styled';
// import { useNavigate } from 'react-router-dom';
import images from '@/constants/images';
import SubmitButton, {
  SubmitButtonTheme,
} from '@/components/elements/SubmitButton';

export type RegisterForm = {
  email: string;
  password: string;
};

const Register: FC = () => {
  // const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    term: false,
  };

  // const handleRegister = async (values: RegisterForm) => {
  //   try {
  //     const { email, password } = values;
  //     await api.signUp.signUpCreate({ email, password });
  //     navigate(`${ROUTE.LOGIN}`);
  //     Modal.success({
  //       title: t(messages.success()),
  //       content: t(messages.anEmailWasSent()),
  //     });
  //     eslint - disable - next - line;
  //   } catch (error: any) {
  //     const errorStatus = error.response.status;
  //     if (errorStatus === 409) {
  //       Modal.warn({
  //         title: t(messages.warning()),
  //         content: t(messages.emailExisted()),
  //       });
  //     }
  //   }
  // };

  return (
    <StyledLogin>
      <div className="left-signup">
        {/* <div className="banner">
          <img src={BANNER_SIGNUP} alt="BANNER_SIGNUP" />
        </div> */}
      </div>

      <div className="right-signup">
        <div className="form-register">
          <div className="up-layout">
            <span className="jiffy-logo">
              <img src={images.TOP_ZONE_LOGO} alt="JIFFY_LOGO" height="100px" />
            </span>
            <h2>Sign up</h2>
            <span className="have-account">
              <span>Already have an account? &nbsp;</span>
              <Link to={`/${ROUTE.LOGIN}`}>Login</Link>
            </span>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { resetForm }) => {
              // await handleRegister(values);
              resetForm({
                values: {
                  email: '',
                  password: '',
                  confirmPassword: '',
                  term: false,
                },
              });
            }}
            // validationSchema={registerValidationSchema(t)}
          >
            {({ isValid, dirty }) => {
              const isDisableSignUp = !isValid || !dirty;
              return (
                <Form className="register-form" colon={false} name="register">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Email"
                    name="email"
                  >
                    <Input
                      size="large"
                      name="email"
                      placeholder="exampale@gmail.com"
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

                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Confirm password"
                    name="confirmPassword"
                  >
                    <Input.Password
                      size="large"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </Form.Item>

                  <Form.Item name="term" className="use-term">
                    <Checkbox name="term" />

                    <div className="text-signup">
                      <span>I have read & agree to</span>
                      <a>Topzone’s Terms of Use</a>
                    </div>
                  </Form.Item>

                  <div className="btn-register">
                    <SubmitButton
                      theme={
                        isDisableSignUp
                          ? SubmitButtonTheme.Disabled
                          : SubmitButtonTheme.BlueWhite
                      }
                      height={50}
                      fontSize={24}
                      disabled={isDisableSignUp}
                      text="Sign up"
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

export default Register;
