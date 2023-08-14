export enum BUTTON_THEME {
  STYLED = 'styled',
}

export type ReceivedProps = {
  theme?: BUTTON_THEME;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  handleClick?: (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  leftIcon?: string;
  rightIcon?: string;
  disabledShadow?: boolean;
  fontSize?: number;
  height?: number;
  justify?: string;
  width?: number;
  gapLeftIcon?: number;
  text?: string;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
};

const useButtonHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useButtonHook>;

export default useButtonHook;
