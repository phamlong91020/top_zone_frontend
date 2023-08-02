export type ReceivedProps = Record<string, unknown>;

const useFooterHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useFooterHook>;

export default useFooterHook;
