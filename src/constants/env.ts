const env = import.meta.env;

const { VITE_API_URL, VITE_ENVIRONMENT } = env;

export const config = {
  env: {
    VITE_API_URL,
    VITE_ENVIRONMENT,
  },
};
