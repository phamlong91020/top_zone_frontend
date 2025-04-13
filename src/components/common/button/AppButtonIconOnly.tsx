import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { ETypeButton } from '@/enums';
import { Colors } from '@/constants';
import { SpinIcon } from '@/components';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Button
  backgroundColor?: string;
  backgroundColorHover?: string;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginBottom?: number;
  // Icon
  icon: React.ReactNode;
  // Loading
  loading?: boolean;
  disabled?: boolean;
  // Style Loading
  loadingSize?: number;
  loadingColor?: string;
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

interface IStyledProps {
  // Button
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  $width?: number | string;
  $height?: number;
  $borderRadius?: number;
  $borderColor?: string;
  $paddingVertical?: number;
  $paddingHorizontal?: number;
  $marginBottom?: number;
  // Loading
  $loading?: boolean;
  $loadingSize?: number;
  $loadingColor?: string;
}

export const AppButtonIconOnly: FC<IProps> = (props) => {
  const {
    // Button
    backgroundColor,
    width,
    height,
    borderRadius,
    borderColor,
    paddingHorizontal,
    paddingVertical,
    marginBottom,
    // Icon
    icon,
    // Difference
    type,
    disabled,
    // Loading
    loading,
    loadingSize,
    loadingColor,
    className,
    onClick,
  } = props;

  return (
    <StyledAppButtonIconOnly
      className={className}
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      $loading={loading}
      disabled={disabled}
      type={
        type === ETypeButton.SUBMIT ? ETypeButton.SUBMIT : ETypeButton.BUTTON
      }
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $loadingSize={loadingSize}
      $loadingColor={loadingColor}
      $paddingVertical={paddingVertical}
      $paddingHorizontal={paddingHorizontal}
      $marginBottom={marginBottom}
      onClick={onClick}
    >
      {loading ? (
        <div className="loading">
          {loading && <SpinIcon size={loadingSize} />}
        </div>
      ) : (
        <>{icon}</>
      )}
    </StyledAppButtonIconOnly>
  );
};

const StyledAppButtonIconOnly = styled.button<IStyledProps>`
  // Display
  display: flex;
  justify-content: center;
  align-items: center;

  // Common Style
  background: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Colors.blue_20};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}` : 32)}px;

  // Border
  border: ${({ $borderColor }) => ($borderColor ? '1px solid' : 'none')};
  border-color: ${({ $borderColor }) => ($borderColor ? $borderColor : '')};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? `${$borderRadius}px` : '4px'};
  cursor: pointer;

  // Padding
  padding-top: ${({ $paddingVertical }) =>
    $paddingVertical !== undefined ? $paddingVertical : 0}px;
  padding-bottom: ${({ $paddingVertical }) =>
    $paddingVertical !== undefined ? $paddingVertical : 0}px;

  padding-left: ${({ $paddingHorizontal }) =>
    $paddingHorizontal !== undefined ? `${$paddingHorizontal}px` : '12px'};
  padding-right: ${({ $paddingHorizontal }) =>
    $paddingHorizontal !== undefined ? `${$paddingHorizontal}px` : '12px'};

  // Margin
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : 0}px;

  &:hover {
    opacity: 0.9;
    /* background: ${({ $backgroundColorHover }) =>
      $backgroundColorHover ? $backgroundColorHover : Colors.blue_60}; */
  }

  &:disabled {
    background: ${({ $backgroundColor }) => $backgroundColor};
    color: ${Colors.white_10};
    opacity: 0.8;
    cursor: not-allowed;
  }

  .loading {
    display: ${({ $loading }) =>
      $loading === undefined || $loading === false ? 'none' : 'block'};
    > span {
      font-size: ${({ $loadingSize }) => ($loadingSize ? $loadingSize : 14)}px;
      color: ${({ $loadingColor }) =>
        $loadingColor ? $loadingColor : Colors.white_10};
    }
  }
`;
