import { FC } from 'react';
import useButtonHook, { Props, ReceivedProps } from './hook';
import StyledButton from './styled';
import classNames from 'classnames';

const ButtonLayout: FC<Props> = (props) => {
  const {
    theme,
    fullWidth,
    loading,
    disabled,
    handleClick,
    leftIcon,
    rightIcon,
    disabledShadow = false,
    fontSize,
    height,
    justify,
    width,
    gapLeftIcon,
    text,
    color,
    fontWeight,
    backgroundColor,
    paddingVertical,
    paddingHorizontal,
  } = props;
  return (
    <StyledButton
      className={classNames(theme, {
        'full-width': fullWidth,
        'disabled-shadow': disabledShadow,
      })}
      onClick={handleClick}
      loading={loading}
      disabled={disabled}
      fontSize={fontSize}
      height={height}
      width={width}
      justify={justify}
      gapLeftIcon={gapLeftIcon}
      color={color}
      fontWeight={fontWeight}
      backgroundColor={backgroundColor}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      {leftIcon && <img className="left-icon" src={leftIcon} alt="LEFT_ICON" />}

      <p>{text}</p>

      {rightIcon && (
        <img className="right-icon" src={rightIcon} alt="RIGHT_ICON" />
      )}
    </StyledButton>
  );
};

const Button: FC<ReceivedProps> = (props) => (
  <ButtonLayout {...useButtonHook(props)} />
);

export default Button;
