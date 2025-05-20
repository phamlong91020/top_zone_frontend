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
  fieldMarginBottom?: number;
}

interface IStyledProps {
  $width?: number;
  $height?: number;
  $borderRadius?: number;
  $objectFit?: string;
  $cursor?: ETextCursor;
  $fieldMarginBottom?: number;
}

export const AppImage: FC<IProps> = (props) => {
  const {
    imageUrl,
    fieldMarginBottom,
    width,
    height,
    borderRadius,
    objectFit,
    cursor,
    ...rest
  } = props;

  return (
    <StyledAppIcon
      {...rest}
      className="app-image"
      loading="lazy"
      $fieldMarginBottom={fieldMarginBottom}
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
  margin-bottom: ${({ $fieldMarginBottom }) =>
    $fieldMarginBottom !== undefined && $fieldMarginBottom !== null
      ? $fieldMarginBottom
      : 0}px;

  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};

  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? $borderRadius : 0}px;
  object-fit: ${({ $objectFit }) => ($objectFit ? $objectFit : 'unset')};

  cursor: ${({ $cursor }) => ($cursor ? $cursor : ETextCursor.DEFAULT)};
  user-select: none;
`;
