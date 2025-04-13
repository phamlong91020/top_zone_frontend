import { forwardRef } from 'react';
import { Colors } from '@/constants';
import { Radio, RadioGroupProps } from 'antd';
import styled from 'styled-components';
import { AppError, AppLabel } from '../label';

interface IProps extends RadioGroupProps {
  // Label
  label?: string;
  required?: boolean;
  labelFontSize?: number;
  labelFontWeight?: number;
  labelMarginBottom?: number;
  labelColor?: string;
  errors?: string;
  // Field
  fieldMarginBottom?: number;
  gapRadioList?: number;
  gapItem?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  circleColor?: string;
  fontSizeText?: number;
  fontWeightText?: number;
  textColor?: string;
  letterSpacingText?: number;
  textLineHeight?: number;
  // Style
  flexDirection?: string;
}

interface IStyledProps {
  // Field
  $fieldMarginBottom?: number;
  $gapRadioList?: number;
  $gapItem?: number;
  $backgroundColor?: string;
  $borderColor?: string;
  $circleColor?: string;
  $borderWidth?: number;
  $fontSizeText?: number;
  $fontWeightText?: number;
  $letterSpacingText?: number;
  $textColor?: string;
  $textLineHeight?: number;
  $flexDirection?: string;
}

export const AppRadioGroup = forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    const {
      fieldMarginBottom,
      // Label
      label,
      required,
      labelFontSize,
      labelFontWeight,
      labelColor,
      labelMarginBottom,
      errors,
      gapRadioList,
      gapItem,
      backgroundColor,
      borderColor,
      circleColor,
      borderWidth,
      fontSizeText,
      fontWeightText,
      letterSpacingText,
      textColor,
      textLineHeight,
      flexDirection,
      ...rest
    } = props;

    return (
      <StyledAppRadioGroup
        className="app-radio-group"
        $fieldMarginBottom={fieldMarginBottom}
        $gapRadioList={gapRadioList}
        $gapItem={gapItem}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $borderWidth={borderWidth}
        $fontSizeText={fontSizeText}
        $fontWeightText={fontWeightText}
        $letterSpacingText={letterSpacingText}
        $textColor={textColor}
        $textLineHeight={textLineHeight}
        $flexDirection={flexDirection}
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

        <Radio.Group block {...rest} ref={ref} />

        {errors && <AppError errors={errors} />}
      </StyledAppRadioGroup>
    );
  }
);

const StyledAppRadioGroup = styled.div<IStyledProps>`
  margin-bottom: ${({ $fieldMarginBottom }) =>
    $fieldMarginBottom !== undefined && $fieldMarginBottom !== null
      ? $fieldMarginBottom
      : 20}px;

  > .ant-radio-group {
    gap: ${({ $gapRadioList }) => ($gapRadioList ? $gapRadioList : 24)}px;
    flex-direction: ${({ $flexDirection }) =>
      $flexDirection ? $flexDirection : 'row'};

    flex-direction: column;
    > .ant-radio-wrapper {
      flex: none;
      justify-content: flex-start;
      margin: 0;
      align-items: center;
      gap: ${({ $gapItem }) => ($gapItem ? $gapItem : 8)}px;

      > .ant-radio {
        margin: 0;
        > .ant-radio-input {
          margin: 0;
        }

        > .ant-radio-inner {
          background-color: ${({ $backgroundColor }) =>
            $backgroundColor ? $backgroundColor : Colors.white_10};
          border-width: ${({ $borderWidth }) =>
            $borderWidth ? $borderWidth : 2}px;
          border-color: ${({ $borderColor }) =>
            $borderColor ? $borderColor : Colors.gray_10};
        }
      }

      > .ant-radio-checked {
        > .ant-radio-inner {
          border-color: ${({ $borderColor }) =>
            $borderColor ? $borderColor : Colors.black_10};
          border-width: ${({ $borderWidth }) =>
            $borderWidth ? $borderWidth : 2}px;
          &::after {
            background-color: ${({ $circleColor }) =>
              $circleColor ? $circleColor : Colors.black_10};
          }
        }
      }

      // Style Text
      > span:last-of-type {
        padding: 0;
        font-size: ${({ $fontSizeText }) =>
          $fontSizeText ? $fontSizeText : 14}px;
        font-weight: ${({ $fontWeightText }) =>
          $fontWeightText ? $fontWeightText : 400};
        color: ${({ $textColor }) =>
          $textColor ? $textColor : Colors.black_10};
        letter-spacing: ${({ $letterSpacingText }) =>
          $letterSpacingText ? $letterSpacingText : 0}px;
        line-height: ${({ $textLineHeight }) =>
          $textLineHeight ? `${$textLineHeight}px` : 'unset'};
        font-family: 'Inter';
        padding-top: 2px;
      }
    }
  }
`;
