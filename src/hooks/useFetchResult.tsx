import { useMemo, useState } from "react";
import { ResultListType } from "../type";

interface ReturnType {
  resultList: ResultListType | null;
  isLoading: boolean;
  isError: boolean;
  fetchAthletes: () => Promise<void>;
}

export const useFetchResult = (): ReturnType => {
  const [resultList, setResultList] = useState<ResultListType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fetchAthletes = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetch(
        "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
      );
      const data: ResultListType = await response.json();
      console.log(data);
      setResultList(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useMemo(() => {
    fetchAthletes();
  }, []);
  return { resultList, isLoading, isError, fetchAthletes };
};
