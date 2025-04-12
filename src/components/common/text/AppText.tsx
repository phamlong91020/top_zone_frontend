import { FC, HTMLAttributes } from 'react';
import { Colors } from '@/constants';
import styled from 'styled-components';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  // Text style
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  letterSpacing?: number;
  lineHeight?: number;
  fontStyle?: string;
  cursor?: string;
  // Margin vertical
  marginTop?: number;
  marginBottom?: number;
  // Margin horizontal
  marginLeft?: number;
  marginRight?: number;
  wordBreak?: string;
  overflowWrap?: string;
  // Text alignment
  textAlign?: string;
  whiteSpace?: string;
  // Size
  width?: string;
}

interface IStyledProps {
  // Text style
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
  $letterSpacing?: number;
  $lineHeight?: number;
  $fontStyle?: string;
  $cursor?: string;
  // Margin vertical
  $marginTop?: number;
  $marginBottom?: number;
  // Margin horizontal
  $marginLeft?: number;
  $marginRight?: number;
  // Break Word
  $overflowWrap?: string;
  $wordBreak?: string;
  // Text alignment
  $textAlign?: string;
  $whiteSpace?: string;
  // Size
  $width?: string;
}

export const AppText: FC<IProps> = (props) => {
  const {
    text,
    fontSize,
    fontWeight,
    color,
    letterSpacing,
    lineHeight,
    fontStyle,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    cursor,
    wordBreak,
    overflowWrap,
    textAlign,
    whiteSpace,
    width,
    ...rest
  } = props;

  return (
    <StyledAppText
      className="app-text"
      // Text style
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      $letterSpacing={letterSpacing}
      $lineHeight={lineHeight}
      $fontStyle={fontStyle}
      $cursor={cursor}
      // Margin vertical
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      // Margin horizontal
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $wordBreak={wordBreak}
      $overflowWrap={overflowWrap}
      // Text alignment
      $textAlign={textAlign}
      $whiteSpace={whiteSpace}
      $width={width}
      {...rest}
    >
      {text}
    </StyledAppText>
  );
};

const StyledAppText = styled.p<IStyledProps>`
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : 14)}px;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
  color: ${({ $color }) => ($color ? $color : Colors.white_10)};
  letter-spacing: ${({ $letterSpacing }) =>
    $letterSpacing ? $letterSpacing : 0}px;
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? `${$lineHeight}px` : 'inherit'};
  font-style: ${({ $fontStyle }) => ($fontStyle ? $fontStyle : 'normal')};
  font-family: 'Inter';

  cursor: ${({ $cursor }) => ($cursor ? $cursor : 'unset')};

  // Margin vertical
  margin-top: ${({ $marginTop }) => ($marginTop ? $marginTop : 0)}px;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : 0}px;

  // Margin horizontal
  margin-left: ${({ $marginLeft }) => ($marginLeft ? $marginLeft : 0)}px;
  margin-right: ${({ $marginRight }) => ($marginRight ? $marginRight : 0)}px;

  // Break word
  overflow-wrap: ${({ $overflowWrap }) => $overflowWrap ?? ''};
  word-break: ${({ $wordBreak }) => $wordBreak ?? ''};

  // Text alignment
  text-align: ${({ $textAlign }) => $textAlign ?? ''};
  white-space: ${({ $whiteSpace }) => $whiteSpace ?? ''};

  // Size
  width: ${({ $width }) => $width ?? 'fit-content'};
`;
