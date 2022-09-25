export type ApiFetcherOptions = {
  //url: string;
  query: string;
  variables?: Variables;
};

export type Variables = { [key: string]: string | any | undefined };

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  //apiUrl: string;
  //fetch: ApiFetcher;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}

export interface ApiHooks {
  cart: {
    useAddItem: any;
    useCart: any;
  };
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>;

export interface ApiProviderContext {
  hooks: ApiHooks;
  fetcher: ApiFetcher;
}
