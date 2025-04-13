import styled from 'styled-components';
import { Radio, RadioProps } from 'antd';
import { forwardRef } from 'react';
import { RadioRef } from 'antd/es/radio';
import { Colors } from '@/constants';
import { AppText } from '../text';
import { ETextCursor, EWordBreak } from '@/enums';

interface IProps extends RadioProps {
  fieldMarginBottom?: number;
  text: string;
  textColor?: string;
  textFontSize?: number;
  textFontWeight?: number;
  secondText?: string;
  secondTextColor?: string;
  secondTextFontSize?: number;
  secondTextFontWeight?: number;
  description?: string;
  descriptionColor?: string;
  fontSizeDescription?: number;
  fontWeightDescription?: number;
  cursorTitle?: string;
  textWordBreak?: string;
}

interface IStyledProps {
  $fieldMarginBottom?: number;
}

export const AppRadio = forwardRef<RadioRef, IProps>((props, ref) => {
  const {
    fieldMarginBottom,
    text,
    description,
    textColor,
    textFontSize,
    textFontWeight,
    secondText,
    secondTextColor,
    secondTextFontSize,
    secondTextFontWeight,
    descriptionColor,
    fontSizeDescription,
    fontWeightDescription,
    cursorTitle,
    textWordBreak = EWordBreak.BREAK_WORDS,
    ...rest
  } = props;

  return (
    <StyledAppRadio
      $fieldMarginBottom={fieldMarginBottom}
      className="app-radio"
    >
      <Radio {...rest} ref={ref}>
        <AppText
          text={text}
          fontSize={textFontSize}
          fontWeight={textFontWeight}
          color={textColor}
          cursor={cursorTitle ?? ETextCursor.POINTER}
          letterSpacing={-0.2}
          wordBreak={textWordBreak}
        />
        {secondText && (
          <AppText
            text={secondText}
            fontSize={secondTextFontSize}
            fontWeight={secondTextFontWeight}
            color={secondTextColor}
            cursor={ETextCursor.POINTER}
            letterSpacing={-0.2}
            wordBreak={textWordBreak}
          />
        )}
      </Radio>

      {description && (
        <div className="description">
          <AppText
            text={description}
            fontSize={fontSizeDescription}
            fontWeight={fontWeightDescription}
            color={descriptionColor}
            letterSpacing={-0.2}
            wordBreak={textWordBreak}
          />
        </div>
      )}
    </StyledAppRadio>
  );
});

const StyledAppRadio = styled.div<IStyledProps>`
  margin-bottom: ${({ $fieldMarginBottom }) =>
    $fieldMarginBottom !== undefined && $fieldMarginBottom !== null
      ? $fieldMarginBottom
      : 0}px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  .ant-radio-wrapper {
    flex: none;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    width: fit-content;

    .ant-radio {
      margin: 0;

      .ant-radio-input {
        margin: 0;
      }

      .ant-radio-inner {
        background-color: ${Colors.gray_60};
        border-width: 2px;
        border-color: ${Colors.gray_110};
      }

      &.ant-radio-checked {
        .ant-radio-inner {
          border-color: ${Colors.blue_30};
          border-width: 2px;

          &::after {
            background-color: ${Colors.blue_30};
          }
        }
      }
    }

    span:last-of-type {
      font-size: 14px;
      font-weight: 400;
      color: ${Colors.white_20};
      padding-top: 2px;
    }
  }

  .description {
    margin-left: 24px;
  }
`;
