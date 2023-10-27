import { styled } from 'styled-components';
import images from '@/constants/images';

const StyledLogin = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  .loading {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 20px;
    left: 50%;
  }

  > .left-signup {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      background: url(${images.BACKGROUND_AUTH}) no-repeat top center;
      background-size: cover;
      min-height: 100vh;

      > .banner {
        display: flex;
        justify-content: center;
        > img {
          width: 80%;
        }
      }
    }
  }

  > .right-signup {
    background-size: cover;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    justify-content: center;

    @media screen and (min-width: 768px) {
      background: none;
      flex-basis: 50%;
    }

    > .form-register {
      width: 100%;
      > .up-layout {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;

        > .topzone-logo {
          position: relative;
          > img {
            height: 80px;
          }
        }

        > .flag_icon {
          position: absolute;
          top: 46px;
          right: 30px;
        }

        > h2 {
          color: ${(props) => props.theme.colors.black};
          text-align: center;
          font-family: 'Inter';
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -0.64px;
          margin: 0;
          padding-bottom: 20px;
        }

        > .have-account {
          > span {
            color: ${(props) => props.theme.colors.black};
            font-family: 'Inter';
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.2px;
          }
          > a {
            color: #0ca0f0;
            font-family: 'Inter';
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: -0.2px;
          }
        }
      }
      > .register-form {
        width: 100%;
        padding: 30px 20px 30px 20px;
        > .use-term {
          margin: 0;
          padding-top: 6px;
        }
        > .btn-register {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 32px;
          width: 100%;
          > button {
            width: 100%;
          }

          @media screen and (min-width: 768px) {
            width: auto;
            padding-top: 20px;
            > button {
              width: auto;
            }
          }
        }
      }
    }
  }

  .ant-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;

    > .ant-form-item {
      width: 100%;
      max-width: 98% !important;

      @media screen and (min-width: 768px) {
        max-width: 65% !important;
      }
    }
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-login {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;

    > a {
      color: ${(props) => props.theme.colors.textBlue};
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.2px;
    }
  }

  .text-signup {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 8px;

    > span {
      color: #000;
      font-family: 'Inter';
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.2px;
    }

    > a {
      color: ${(props) => props.theme.colors.textBlue};
      font-family: 'Inter';
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.2px;
      padding-left: 3px;
      text-decoration-line: underline;
    }
  }

  .ant-modal-confirm-btns {
    text-align: unset;
    display: flex;
    justify-content: space-around;
  }
`;

export default StyledLogin;
