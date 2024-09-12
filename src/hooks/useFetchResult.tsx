import { useEffect, useMemo, useState } from "react";
import { ResultListType, SortEnum } from "../type";
import { replaceOutliers, searchResult, sortData } from "./utils";

interface ReturnType {
  resultList: ResultListType[] | null;
  isLoading: boolean;
  isError: boolean;
  fetchAthletes: () => Promise<void>;
}

export const useFetchResult = ({
  sortOption,
  searchText,
}: {
  sortOption: SortEnum;
  searchText: string;
}): ReturnType => {
  const [rawResultList, setRawResultList] = useState<ResultListType[] | null>(
    null
  );
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
      setRawResultList(data);
    } catch (error) {
      console.error("Error fetching athletes:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAthletes();
  }, []);

  const processedResultList = useMemo(() => {
    if (rawResultList) {
      const searchedData = searchResult(rawResultList, searchText);
      const replacedData = replaceOutliers(searchedData, [
        "00:00:00",
        "23:59:59",
      ]);
      return sortData(replacedData, sortOption);
    }
    return null;
  }, [rawResultList, sortOption, searchText]);

  return { resultList: processedResultList, isLoading, isError, fetchAthletes };
};
