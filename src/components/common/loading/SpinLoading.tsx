import { FC } from 'react';
import styled from 'styled-components';
import { SpinIcon } from '@/components';
import { Colors } from '@/constants';

interface IProps {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

interface IStyledProps {
  $width?: number;
  $height?: number;
  $borderRadius?: number;
  $backgroundColor?: string;
}

export const SpinLoading: FC<IProps> = (props) => {
  const { size, color, width, height, borderRadius, backgroundColor } = props;

  return (
    <StyledSpinLoading
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
    >
      <SpinIcon size={size} color={color} />
    </StyledSpinLoading>
  );
};

export const StyledSpinLoading = styled.div<IStyledProps>`
  position: absolute;

  background: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Colors.gray_130};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0.9;
  z-index: 99;

  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius : 0}px;
`;
