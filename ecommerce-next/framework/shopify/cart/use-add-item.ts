import { useAddItem } from "@common/cart";

export default useAddItem;

export const handler = {
  fetcher: () => {
    console.log("Fetching Data");
  },
  useHook: () => {
    return (input: any) => {
      return {
        //output: input + "_MODIFIED",
        output: JSON.stringify(input) + "_MODIFIED",
      };
    };
  },
};
