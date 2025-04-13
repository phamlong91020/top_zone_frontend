import { Colors } from '@/constants';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  errors?: string;
  errorFontSize?: number;
  errorFontWeight?: number;
}

interface IStyled {
  $errorFontSize?: number;
  $errorFontWeight?: number;
}

export const AppError: FC<IProps> = ({
  errors,
  errorFontSize,
  errorFontWeight,
}) => {
  if (!errors) return null;

  return (
    <StyledAppError
      className="app-error"
      $errorFontSize={errorFontSize}
      $errorFontWeight={errorFontWeight}
    >
      {errors}
    </StyledAppError>
  );
};

const StyledAppError = styled.p<IStyled>`
  margin-top: 3px;

  font-size: ${({ $errorFontSize }) =>
    $errorFontSize ? $errorFontSize : 12}px;
  font-weight: ${({ $errorFontWeight }) =>
    $errorFontWeight ? $errorFontWeight : 400};

  color: ${Colors.red_20};
`;
