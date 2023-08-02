export type ReceivedProps = Record<string, unknown>;

const useHeaderHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useHeaderHook>;

export default useHeaderHook;
