import { SortEnum } from "./type";

interface DropDownOptionListType {
  label: string;
  value: SortEnum;
}

export const dropDownOptionList: DropDownOptionListType[] = [
  {
    label: "Total Time",
    value: SortEnum.Total_Time,
  },
  {
    label: "Swim Time",
    value: SortEnum.Swim_Time,
  },
  {
    label: "BikeTime",
    value: SortEnum.Bike_Time,
  },
  {
    label: "Run time",
    value: SortEnum.Run_time,
  },
  {
    label: "T1 time",
    value: SortEnum.T1_time,
  },
  {
    label: "T2 time",
    value: SortEnum.T2_time,
  },
];

export const invalidTimeLabel = "Invalid time";
