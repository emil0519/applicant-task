import { useMemo, useState } from "react";
import { ResultListType, SortEnum } from "../type";
import { replaceOutliers, sortData } from "./utils";

interface ReturnType {
  resultList: ResultListType[] | null;
  isLoading: boolean;
  isError: boolean;
  fetchAthletes: () => Promise<void>;
}

export const useFetchResult = ({
  sortOption,
}: {
  sortOption: SortEnum;
}): ReturnType => {
  const [resultList, setResultList] = useState<ResultListType[] | null>(null);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fetchAthletes = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetch(
        "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data: ResultListType[] = await response.json();
      const replacedData = replaceOutliers(data, ["00:00:00", "23:59:59"]);
      const sortedData = sortData(replacedData, sortOption);
      setIsFirstRender(false);
      setResultList(sortedData);
    } catch (error) {
      console.error("Error fetching athletes:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useMemo(() => {
    fetchAthletes();
  }, []);

  useMemo(() => {
    if (resultList && !isFirstRender) {
      const sortedData = sortData(resultList, sortOption);
      setResultList(sortedData);
    }
  }, [resultList, sortOption, isFirstRender]);
  return { resultList, isLoading, isError, fetchAthletes };
};
