import { useNavigate } from 'react-router-dom';

export type ReceivedProps = Record<string, unknown>;

const useHeaderHook = (props: ReceivedProps) => {
  const navigate = useNavigate();

  return {
    navigate,
    ...props,
  };
};

export type Props = ReturnType<typeof useHeaderHook>;

export default useHeaderHook;
