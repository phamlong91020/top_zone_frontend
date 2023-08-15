import { styled } from 'styled-components';

const StyledLogin = styled.div`
  > .product-category {
    touch-action: pan-y;
    max-width: 100%;
    overflow: hidden;
    padding: 12px 6px;

    > .category-list {
      display: flex;
      gap: 12px;

      list-style: none;
      margin: 0;
      padding: 0;

      overflow-y: hidden;
      overflow-x: auto;

      > .category {
        display: flex;
        flex-direction: column;
        text-align: center;

        > a {
          margin: 0 auto 6px auto;
          color: #fff;
          display: block;
          background: #00483d 0% 0% no-repeat padding-box;
          border-radius: 26px;
          opacity: 1;
          width: 52px;
          height: 52px;
          text-align: center;
          font-size: 24px;
          display: flex;
          justify-content: center;
          justify-items: center;

          > img {
            width: 58%;
          }
        }

        > .label {
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 700;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default StyledLogin;
