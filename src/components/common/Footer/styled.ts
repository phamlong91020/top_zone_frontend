import { styled } from 'styled-components';

const StyledFooter = styled.div`
  padding: 20px 20px;
  background: #3e3e3f;
  width: 100%;
  height: 100%;
  > .footer {
    > .wrapper-banner {
      display: flex;
      justify-content: center;
      align-self: center;
      > .topzone-logo {
        padding-right: 12px;
        border-right: 1px solid #2d2d2d;
        > img:first-of-type {
          width: 103px;
          height: 35px;
        }
      }
      > .apple-reseller {
        padding-left: 10px;
        > img:last-of-type {
          width: 32px;
          height: 40px;
        }
      }
    }
  }
`;

export default StyledFooter;
