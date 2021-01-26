export type BuildQueryProps = {
  [key: string]: string;
};

export const buildQuery = <T extends BuildQueryProps>(params: T): string => {
  const query = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    if (params[key]) {
      query.set(key, params[key]);
    }
  });

  return `?${query.toString()}`;
};
