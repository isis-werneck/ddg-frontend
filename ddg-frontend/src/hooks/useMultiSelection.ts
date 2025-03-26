import { useRecordSelection, type UseRecordSelectionArgs } from "react-admin";

/**
 * A custom hook that enhances the `useRecordSelection` hook by appending
 * "_multi" to the resource name. This is useful for managing selections
 * in scenarios where multiple selections need to be tracked separately
 * from the default selection behavior.
 *
 * @param {UseRecordSelectionArgs} args - The arguments for useRecordSelection.
 * @returns {ReturnType<typeof useRecordSelection>} The modified record selection hook.
 */

export const useMultiSelection = (args: UseRecordSelectionArgs, storeKey?: string | false) => {
  args.resource = (storeKey || args.resource || "default") + "_multi";
  return useRecordSelection(args);
};
