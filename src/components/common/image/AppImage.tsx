import { FC } from 'react';
import { ETextCursor } from '@/enums';
import styled from 'styled-components';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  objectFit?: string;
  cursor?: ETextCursor;
}

interface IStyledProps {
  $width?: number;
  $height?: number;
  $borderRadius?: number;
  $objectFit?: string;
  $cursor?: ETextCursor;
}

export const AppImage: FC<IProps> = (props) => {
  const { imageUrl, width, height, borderRadius, objectFit, cursor, ...rest } =
    props;

  return (
    <StyledAppIcon
      {...rest}
      loading="lazy"
      src={imageUrl}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $objectFit={objectFit}
      $cursor={cursor}
    />
  );
};

const StyledAppIcon = styled.img<IStyledProps>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius : 0}px;
  object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : 'unset')};
  cursor: ${({ $cursor }) => ($cursor ? $cursor : ETextCursor.DEFAULT)};
`;
