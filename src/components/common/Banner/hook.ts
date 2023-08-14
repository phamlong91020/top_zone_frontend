export type ReceivedProps = Record<string, unknown>;

const useBannerHook = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useBannerHook>;

export default useBannerHook;
