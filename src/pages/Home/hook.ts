export type ReceivedProps = Record<string, unknown>;

const useHomeHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useHomeHook>;

export default useHomeHook;
