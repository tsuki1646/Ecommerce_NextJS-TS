import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: async ({ fetch, input }) => {
    //debugger;
    const response = await fetch({
      //url: "http://localhost:4000/graphql",
      query: `query { hello }`,
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
