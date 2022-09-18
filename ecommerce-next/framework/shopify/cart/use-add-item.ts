import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: (input: any) => {
    return JSON.stringify(input) + "_MODIFIED";
  },
  useHook: ({ fetch }) => {
    return (input: any) => {
      const response = fetch(input);
      return {
        //output: input + "_MODIFIED",
        //output: JSON.stringify(input) + "_MODIFIED",
        output: response,
      };
    };
  },
};
