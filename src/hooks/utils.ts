import { ResultListType } from "../type";

/**
 * @param resultList api data
 * @param outlier string[], data intended to be check & replace
 * @returns replaced data will be replaced by string "Invalid time"
 */
export const replaceOutliers = (
  resultList: ResultListType[],
  outliers: string[]
): ResultListType[] => {
  return resultList.map((result) => ({
    ...result,
    total_time: outliers.includes(result.total_time)
      ? "Invalid time"
      : result.total_time,
    splits: result.splits.map((split) => ({
      ...split,
      time: outliers.includes(split.time) ? "Invalid time" : split.time,
    })),
  }));
};
