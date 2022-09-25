import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcherOptions: {
    query: `query {hello}`,
  },
  fetcher: async ({ fetch, options, input }) => {
    debugger;
    const variables: any = {
      checkoutId: null,
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    };

    const response = await fetch({
      ...options,
      variables,
    });
    //debugger;
    //return JSON.stringify(input) + "_MODIFIED";
    return response;
  },
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const response = await fetch(input);
      return {
        //output: input + "_MODIFIED",
        //output: JSON.stringify(input) + "_MODIFIED",
        output: response,
      };
    };
  },
};
