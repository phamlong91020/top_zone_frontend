import { Colors } from '@/constants';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface IProps {
  size?: number;
  color?: string;
}

export const SpinIcon: FC<IProps> = (props) => {
  const { size, color } = props;

  return <StyledSpinIcon size={size} color={color} />;
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinIcon = styled(Loader2)`
  width: ${(props) => (props.size ? props.size : 14)}px;
  height: ${(props) => (props.size ? props.size : 14)}px;
  color: ${(props) => (props.color ? props.color : Colors.white_10)};
  animation: ${spin} 1s linear infinite;
  border-radius: 50%;
`;
