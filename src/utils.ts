import { SortEnum, SplitType } from "./type";

/**
 *
 * @param splits SplitType[] with name and time for each split
 * @param splitName SortEnum, e.g. swim_time
 * @returns If specific time is found, return time, if no time is find, return N/A
 */
export const getSplitTime = (
  splits: SplitType[],
  splitName: SortEnum
): string => {
  const split = splits.find((s) => s.name === splitName);
  return split ? split.time : "N/A";
};
