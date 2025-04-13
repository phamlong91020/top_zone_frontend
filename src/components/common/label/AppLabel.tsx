import { Colors } from '@/constants';
import { FC, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IAppLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  required?: boolean;
  labelFontSize?: number;
  labelFontWeight?: number;
  labelColor?: string;
  labelMarginBottom?: number;
  labelLetterSpacing?: number;
}

interface IStyledProps {
  $labelFontSize?: number;
  $labelFontWeight?: number;
  $labelMarginBottom?: number;
  $labelColor?: string;
  $labelLetterSpacing?: number;
}

export const AppLabel: FC<IAppLabelProps> = (props) => {
  const {
    label,
    required,
    labelFontSize,
    labelFontWeight,
    labelColor,
    labelMarginBottom,
    labelLetterSpacing,
  } = props;

  return (
    <StyledAppLabel
      className="app-label"
      $labelFontSize={labelFontSize}
      $labelFontWeight={labelFontWeight}
      $labelMarginBottom={labelMarginBottom}
      $labelColor={labelColor}
      $labelLetterSpacing={labelLetterSpacing}
    >
      <label>{label}</label>
      {required && <span className="text-required">*</span>}
    </StyledAppLabel>
  );
};

const StyledAppLabel = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: ${({ $labelMarginBottom }) =>
    $labelMarginBottom ? $labelMarginBottom : 8}px;

  > label {
    font-size: ${({ $labelFontSize }) =>
      $labelFontSize ? $labelFontSize : 12}px;
    font-weight: ${({ $labelFontWeight }) =>
      $labelFontWeight ? $labelFontWeight : 400};
    font-family: 'Inter';
    color: ${({ $labelColor }) => ($labelColor ? $labelColor : Colors.gray_10)};
    letter-spacing: ${({ $labelLetterSpacing }) =>
      $labelLetterSpacing !== undefined && $labelLetterSpacing !== null
        ? $labelLetterSpacing
        : -0.2}px;
  }

  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: ${Colors.red_20};
    font-family: 'Inter';
  }
`;
