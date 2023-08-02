export type ReceivedProps = Record<string, unknown>;

const useMainLayoutHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useMainLayoutHook>;

export default useMainLayoutHook;
