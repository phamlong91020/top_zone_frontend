/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { ETypeButton } from '@/enums';
import { Colors } from '@/constants';
import { SpinIcon } from '@/components';

interface IPropsBase extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  backgroundColorHover?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  text: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  borderRadius?: number;
  borderColor?: string;
  loadingSize?: number;
  loadingColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  iconSize?: number;
  gap?: number;
  letterSpacing?: number;
  lineHeight?: number;
  justifyContent?: string;
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

interface IPropsWithLeftIcon extends IPropsBase {
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface IPropsWithRightIcon extends IPropsBase {
  leftIcon?: React.ReactNode;
  rightIcon: React.ReactNode;
}

type IProps = IPropsWithLeftIcon | IPropsWithRightIcon;

interface IStyledProps {
  $width?: number;
  $height?: number;
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
  $loading?: boolean;
  $borderRadius?: number;
  $borderColor?: string;
  $loadingSize?: number;
  $loadingColor?: string;
  $paddingVertical?: number;
  $paddingHorizontal?: number;
  $marginTop?: number;
  $marginBottom?: number;
  $iconSize?: number;
  $gap?: number;
  $letterSpacing?: number;
  $lineHeight?: number;
  $justifyContent?: string;
}

export const AppButtonIcon = forwardRef<any, IProps>((props, ref) => {
  const {
    backgroundColor,
    backgroundColorHover,
    width,
    height,
    fontSize,
    fontWeight,
    color,
    text,
    loading,
    disabled,
    type,
    borderRadius,
    borderColor,
    loadingSize,
    loadingColor,
    paddingVertical,
    paddingHorizontal,
    leftIcon,
    rightIcon,
    marginTop,
    marginBottom,
    iconSize,
    gap,
    letterSpacing,
    lineHeight,
    justifyContent,
    onClick,
  } = props;

  return (
    <StyledAppButtonIcon
      ref={ref}
      $backgroundColor={backgroundColor}
      $backgroundColorHover={backgroundColorHover}
      $width={width}
      $height={height}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
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
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $iconSize={iconSize}
      $gap={gap}
      $letterSpacing={letterSpacing}
      $lineHeight={lineHeight}
      $justifyContent={justifyContent}
      className="app-button-icon"
      onClick={onClick}
    >
      {loading ? (
        <div className="loading">
          {loading && <SpinIcon size={loadingSize} />}
        </div>
      ) : (
        <>
          {leftIcon && leftIcon}
          <p className="text">{text}</p>
          {rightIcon && rightIcon}
        </>
      )}
    </StyledAppButtonIcon>
  );
});

const StyledAppButtonIcon = styled.button<IStyledProps>`
  // Display
  display: flex;
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : 'center'};
  gap: ${({ $gap }) => ($gap ? $gap : 8)}px;

  align-items: center;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : 0}px;
  margin-top: ${({ $marginTop }) => ($marginTop ? $marginTop : 0)}px;

  // Common style
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Colors.blue_20};
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => ($height ? `${$height}` : 32)}px;

  // Border
  border: ${({ $borderColor }) => ($borderColor ? '1px solid' : 'none')};
  border-color: ${({ $borderColor }) => ($borderColor ? $borderColor : '')};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? `${$borderRadius}px` : '4px'};

  // Padding
  padding-top: ${({ $paddingVertical }) =>
    $paddingVertical !== undefined ? $paddingVertical : 0}px;
  padding-bottom: ${({ $paddingVertical }) =>
    $paddingVertical !== undefined ? $paddingVertical : 0}px;

  padding-left: ${({ $paddingHorizontal }) =>
    $paddingHorizontal !== undefined ? `${$paddingHorizontal}px` : '12px'};
  padding-right: ${({ $paddingHorizontal }) =>
    $paddingHorizontal !== undefined ? `${$paddingHorizontal}px` : '12px'};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: ${({ $backgroundColorHover }) =>
      $backgroundColorHover ? $backgroundColorHover : ''};
  }

  &:disabled {
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${Colors.white_10};
    opacity: 0.8;
    cursor: not-allowed;
  }

  > .loading {
    display: ${({ $loading }) => (!$loading ? 'none' : 'block')};
  }

  .text {
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : 14)}px;
    font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
    color: ${({ $color }) => ($color ? $color : Colors.white_20)};
    font-family: 'Inter';
    letter-spacing: ${({ $letterSpacing }) =>
      $letterSpacing ? $letterSpacing : 0}px;
    line-height: ${({ $lineHeight }) =>
      $lineHeight ? `${$lineHeight}px` : 'unset'};
  }
`;
