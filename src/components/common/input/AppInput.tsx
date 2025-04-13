import { Input, InputRef } from 'antd';
import { forwardRef } from 'react';
import { AppError, AppLabel } from '../label';
import { EInputAntdError } from '@/enums';
import { Colors } from '@/constants';
import { AppText } from '../text';
import styled from 'styled-components';

interface IProps extends React.ComponentProps<typeof Input> {
  // Label
  label?: string;
  required?: boolean;
  errors?: string;
  labelFontSize?: number;
  labelFontWeight?: number;
  labelMarginBottom?: number;
  labelColor?: string;
  // Field
  fieldMarginBottom?: number;
  width?: number;
  height?: number;
  // Input
  backgroundColor?: string;
  backgroundDisabledColor?: string;
  placeholderColor?: string;
  textColor?: string;
  // Border Radius
  borderRadius?: number;
  borderColor?: string;
  // Count
  customCount?: boolean;
}

interface IStyledProps {
  $fieldMarginBottom?: number;
  $backgroundColor?: string;
  $backgroundDisabledColor?: string;
  $borderRadius?: number;
  $placeholderColor?: string;
  $width?: number;
  $height?: number;
  $textColor?: string;
  $borderColor?: string;
}

export const AppInput = forwardRef<InputRef, IProps>((props, ref) => {
  const {
    label,
    required,
    errors = '',
    labelFontSize,
    labelFontWeight,
    fieldMarginBottom,
    labelMarginBottom,
    labelColor,
    backgroundColor,
    backgroundDisabledColor,
    borderRadius,
    placeholderColor,
    width,
    height,
    textColor,
    borderColor,
    customCount = false,
    value,
    maxLength,
    ...rest
  } = props;

  return (
    <StyledAppInput
      className="app-input"
      $fieldMarginBottom={fieldMarginBottom}
      $backgroundColor={backgroundColor}
      $backgroundDisabledColor={backgroundDisabledColor}
      $borderRadius={borderRadius}
      $placeholderColor={placeholderColor}
      $width={width}
      $height={height}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      {label && (
        <AppLabel
          label={label}
          required={required}
          labelFontSize={labelFontSize}
          labelFontWeight={labelFontWeight}
          labelColor={labelColor}
          labelMarginBottom={labelMarginBottom}
        />
      )}

      <Input
        {...rest}
        ref={ref}
        status={errors ? EInputAntdError.ERROR : EInputAntdError.NONE}
        value={value}
        maxLength={maxLength}
      />

      {customCount && (
        <div className="errors-and-length">
          {errors ? (
            <AppError errors={errors} />
          ) : (
            <div className="empty-wrapper"></div>
          )}

          <div className="count-input">
            <AppText
              text={
                typeof value === 'string' || Array.isArray(value)
                  ? value.length.toString()
                  : '0'
              }
              fontSize={12}
              lineHeight={16}
              color={Colors.gray_90}
              letterSpacing={-0.2}
            />
            <AppText
              text="/"
              fontSize={12}
              lineHeight={16}
              color={Colors.gray_90}
              letterSpacing={-0.2}
            />
            <AppText
              text={String(maxLength || '0')}
              fontSize={12}
              lineHeight={16}
              color={Colors.gray_90}
              letterSpacing={-0.2}
            />
          </div>
        </div>
      )}

      {!customCount && errors && <AppError errors={errors} />}
    </StyledAppInput>
  );
});

const StyledAppInput = styled.div<IStyledProps>`
  margin-bottom: ${({ $fieldMarginBottom }) =>
    $fieldMarginBottom !== undefined && $fieldMarginBottom !== null
      ? $fieldMarginBottom
      : 20}px;

  > .ant-input {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor ? $backgroundColor : Colors.white_10};
    width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
    height: ${({ $height }) => ($height ? $height : 36)}px;

    // Border
    border-width: 1px;
    border-style: solid;
    border-color: ${({ $borderColor }) =>
      $borderColor ? $borderColor : Colors.gray_280};

    // Text style
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2px;
    color: ${({ $textColor }) => ($textColor ? $textColor : Colors.black_80)};

    // Placeholder
    &::placeholder {
      font-size: 14px;
      font-size: 400;
      line-height: 18px;
      letter-spacing: -0.2px;
      color: ${({ $placeholderColor }) =>
        $placeholderColor ? $placeholderColor : Colors.black_80};
    }

    // Border Radius
    border-radius: ${({ $borderRadius }) =>
      $borderRadius ? $borderRadius : 4}px;

    &:hover {
      background-color: ${({ $backgroundColor }) =>
        $backgroundColor ? $backgroundColor : Colors.white_10};
    }
  }

  > .ant-input-outlined[disabled] {
    background-color: ${({ $backgroundDisabledColor }) =>
      $backgroundDisabledColor
        ? $backgroundDisabledColor
        : Colors.gray_180} !important;
  }

  .ant-input-status-error {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor ? $backgroundColor : Colors.black_20} !important;
    border-color: ${Colors.red_20} !important;
  }

  > .errors-and-length {
    display: flex;
    justify-content: space-between;
    width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
    > .count-input {
      display: flex;
      justify-content: flex-end;
      margin-top: 3px;
    }
  }
`;
