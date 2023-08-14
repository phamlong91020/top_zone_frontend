import { Button } from 'antd';
import styled from 'styled-components';

type ButtonProps = {
  fontSize?: number;
  height?: number;
  justify?: string;
  width?: number;
  gapLeftIcon?: number;
  borderRadius?: number;
  color?: string;
  fontWeight?: number;
  backgroundColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
};

const StyledButton = styled(Button)<ButtonProps>`
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: ${({ color }) => color || '#fff'};
    text-align: center;
    font-size: ${({ fontSize }) => fontSize || 12}px;
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    letter-spacing: 0.6px;
  }

  &.styled {
    background-color: ${({ backgroundColor }) => backgroundColor || '#ccc'};
    padding: ${({ paddingVertical }) => paddingVertical || ''}px
      ${({ paddingHorizontal }) => paddingHorizontal || ''}px;
  }
`;

export default StyledButton;
