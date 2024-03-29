import { useApiProvider } from "@common";
import { ApiHooks } from "@common/types/api";
import { MutationHook } from "@common/types/hooks";

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};

export const useMutationHook = (hook: MutationHook) => {
  const { fetcher } = useApiProvider();
  return hook.useHook({
    fetch: (input: any) => {
      //debugger;
      return hook.fetcher({
        input,
        // fetch: (input: any) => {
        //   //debugger;
        //   return JSON.stringify(input) + "_MODIFIED";
        // },
        fetch: fetcher,
        options: hook.fetcherOptions,
      });
    },
  });
};
