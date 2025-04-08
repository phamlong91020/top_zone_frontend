import { FC } from 'react';
import { ETextCursor } from '@/enums';
import styled from 'styled-components';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  iconUrl?: string;
  borderRadius?: number;
  cursor?: ETextCursor;
}

interface IStyledProps {
  $size?: number;
  $height?: number;
  $borderRadius?: number;
  $cursor?: ETextCursor;
}

export const AppIcon: FC<IProps> = (props) => {
  const { size, iconUrl, borderRadius, cursor, ...rest } = props;

  return (
    <StyledAppIcon
      {...rest}
      loading="lazy"
      src={iconUrl}
      $size={size}
      $borderRadius={borderRadius}
      $cursor={cursor}
    />
  );
};

const StyledAppIcon = styled.img<IStyledProps>`
  width: ${({ $size }) => ($size ? $size : 16)}px;
  height: ${({ $size }) => ($size ? $size : 16)}px;
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius : 0}px;
  cursor: ${({ $cursor }) => ($cursor ? $cursor : ETextCursor.DEFAULT)};
`;
