export type ReceivedProps = Record<string, unknown>;

const useLoginHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useLoginHook>;

export default useLoginHook;
