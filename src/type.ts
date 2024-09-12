export enum SortEnum {
  Total_Time = "total_time",
  Swim_Time = "swim_time",
  Bike_Time = "bike_time",
  Run_time = "run_time",
  T1_time = "t1_time",
  T2_time = "t2_time",
}

export interface SplitType {
  name: SortEnum;
  time: string;
}

export interface ResultListType {
  first_name: string;
  last_name: string;
  gender: string;
  division: string;
  nationality: string;
  total_time: string;
  splits: SplitType[];
}
