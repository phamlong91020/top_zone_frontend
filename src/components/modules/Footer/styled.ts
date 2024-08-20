import { styled } from 'styled-components';

const StyledFooter = styled.div`
  background: #000;
  > .footer {
    display: flex;
    justify-content: space-between;
    > .hotline {
      display: flex;
      flex-direction: column;
      > span {
        color: #fff;
        font-size: 15px;
        line-height: 20px;
        padding: 0 0 8px;
        font-weight: 500;
      }
    }
  }
`;

export default StyledFooter;
