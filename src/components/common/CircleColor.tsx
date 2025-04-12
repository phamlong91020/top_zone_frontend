import { Colors } from '@/constants';
import { ETextCursor } from '@/enums';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  backgroundColor: string;
}

interface IStyledProps {
  $backgroundColor: string;
}

export const CircleColor: FC<IProps> = (props) => {
  const { backgroundColor } = props;

  return (
    <StyledCircleColor $backgroundColor={backgroundColor}></StyledCircleColor>
  );
};

const StyledCircleColor = styled.div<IStyledProps>`
  width: 40px;
  height: 40px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Colors.black_20};
  border-radius: 100%;
  box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.25);
  cursor: ${ETextCursor.POINTER};
`;
