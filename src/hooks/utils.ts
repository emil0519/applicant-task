import { invalidTimeLabel } from "../constant";
import { ResultListType, SortEnum } from "../type";
/**
 * @description Any time before 00:00:00 or after 23:59:59 will be consider invalid
 */
const isValidTime = (time: string): boolean =>
  /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);

/**
 * @param resultList api data
 * @param outlier string[], invalid time intended to be check & replace
 * @returns replaced data will be replaced by string "Invalid time"
 */
export const replaceOutliers = (
  resultList: ResultListType[],
  outliers: string[]
): ResultListType[] => {
  return resultList.map((result) => ({
    ...result,
    total_time:
      outliers.includes(result.total_time) || !isValidTime(result.total_time)
        ? invalidTimeLabel
        : result.total_time,
    splits: result.splits.map((split) => ({
      ...split,
      time:
        outliers.includes(split.time) || !isValidTime(split.time)
          ? invalidTimeLabel
          : split.time,
    })),
  }));
};

const toSecond = (time: string): number => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const isInvalidTime = (time: string) => time === invalidTimeLabel;

/**
 *
 * @returns 0 = place under the entire data; 1= place aTime under bTime, -1 = place bTime under aTime
 * @description Place invalid time under valid time, then place slower time under faster time
 */
const processSort = (aTime: string, bTime: string): number => {
  if (isInvalidTime(aTime) && isInvalidTime(bTime)) return 0;
  if (isInvalidTime(aTime)) return 1;
  if (isInvalidTime(bTime)) return -1;
  return toSecond(aTime) - toSecond(bTime);
};

/**
 * @param resultList api data
 * @param sortOption SortEnum
 * @returns sorted data according to variant, place invalid time to bottom
 */
export const sortData = (
  resultList: ResultListType[],
  sortOption: SortEnum
): ResultListType[] => {
  if (sortOption === SortEnum.Total_Time) {
    return resultList.sort((a, b) => processSort(a.total_time, b.total_time));
  }
  return resultList.sort((a, b) => {
    const aSplit = a.splits.find((split) => split.name === sortOption);
    const bSplit = b.splits.find((split) => split.name === sortOption);

    const aTime = aSplit ? aSplit.time : invalidTimeLabel;
    const bTime = bSplit ? bSplit.time : invalidTimeLabel;

    return processSort(aTime, bTime);
  });
};
