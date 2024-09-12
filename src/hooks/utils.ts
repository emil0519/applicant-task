import { invalidTimeLabel } from "../constant";
import { ResultListType, SortEnum } from "../type";

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
      ? invalidTimeLabel
      : result.total_time,
    splits: result.splits.map((split) => ({
      ...split,
      time: outliers.includes(split.time) ? invalidTimeLabel : split.time,
    })),
  }));
};

const toSecond = (time: string): number => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const isInvalidTime = (time: string) => time === "Invalid time";

/**
 * @param resultList api data
 * @param sortOption SortEnum
 * @returns sorted data according to variant, place invalid time to bottom
 */
export const sortData = (
  resultList: ResultListType[],
  sortOption: SortEnum
): ResultListType[] => {
  console.log(sortOption);
  //   if (sortOption === SortEnum.Total_Time) {
  return resultList.sort((a, b) => {
    if (isInvalidTime(a.total_time) && isInvalidTime(b.total_time)) return 0;
    // put invalid time data to the bottom of the list
    if (isInvalidTime(a.total_time)) return 1;
    if (isInvalidTime(b.total_time)) return -1;

    return toSecond(a.total_time) - toSecond(b.total_time);
  });
  //   }
};
