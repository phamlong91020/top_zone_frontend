import React, { FC } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { SubmitButton as SubmitButtonFormik } from 'formik-antd';

export enum SubmitButtonTheme {
  BlueWhite = 'blue-white',
  WhiteBlue = 'white-blue',
  Disabled = 'disabled',
}

type Props = {
  theme: SubmitButtonTheme;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  disableShadow?: boolean;
  fontSize?: number;
  height?: number;
  justify?: string;
  width?: number;
  gaplefticon?: number;
  text?: string;
  leftIcon?: React.ReactNode;
};

const SubmitButton: FC<Props> = (props) => {
  const {
    theme,
    fullWidth,
    loading,
    disabled,
    disableShadow = false,
    fontSize,
    height,
    justify,
    width,
    gaplefticon,
    text,
    leftIcon,
  } = props;
  return (
    <StyledSubmitButton
      className={classNames(theme, {
        'full-width': fullWidth,
        'disabled-shadow': disableShadow,
      })}
      loading={loading}
      disabled={disabled}
      fontSize={fontSize}
      height={height}
      width={width}
      justify={justify}
      gaplefticon={gaplefticon}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <p>{text}</p>
    </StyledSubmitButton>
  );
};

type IPropsStyled = {
  fontSize?: number;
  height?: number;
  justify?: string;
  width?: number;
  gaplefticon?: number;
  borderRadius?: number;
};

const StyledSubmitButton = styled(SubmitButtonFormik)<IPropsStyled>`
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 37px;

  &.blue-white {
    min-height: ${({ height }) => height || 50}px;
    width: ${({ width }) => width || 140}px;
    padding: 0 24px;
    background-color: #3699ff;
    border: none;

    > p {
      color: #ffffff;
      text-align: center;
      font-family: 'Inter';
      font-size: ${({ fontSize }) => fontSize || 20}px;
      font-weight: 400;
      letter-spacing: -0.24px;
      margin: 0;
    }
  }

  &.white-blue {
    min-height: ${({ height }) => height || 50}px;
    width: ${({ width }) => width || 140}px;
    padding: 0 24px;
    background-color: #3699ff;

    > p {
      text-align: center;
      font-family: 'Inter';
      font-size: ${({ fontSize }) => fontSize || 20}px;
      font-weight: 400;
      letter-spacing: -0.24px;
      margin: 0;
    }
  }

  &.disabled {
    min-height: ${({ height }) => height || 50}px;
    width: ${({ width }) => width || 140}px;
    padding: 0 24px;
    background-color: #e2e2e2;
    border: none;

    > p {
      color: #ffffff;
      text-align: center;
      font-family: 'Inter';
      font-size: ${({ fontSize }) => fontSize || 20}px;
      font-weight: 400;
      letter-spacing: -0.24px;
      margin: 0;
    }

    .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
      color: unset;
      background-color: unset;
    }
  }
`;

export default SubmitButton;
