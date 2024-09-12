import { ResultListType, SortEnum } from "./type";

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

export const demoData: ResultListType[] = [
  {
    first_name: "KERRY",
    last_name: "CANCROFT",
    gender: "F",
    division: "F50-54",
    nationality: "US",
    total_time: "04:52:35",
    splits: [
      {
        name: "swim_time",
        time: "00:33:08",
      },
      {
        name: "bike_time",
        time: "03:00:34",
      },
      {
        name: "run_time",
        time: "01:14:32",
      },
      {
        name: "t1_time",
        time: "00:02:30",
      },
      {
        name: "t2_time",
        time: "00:01:49",
      },
    ],
  },
  {
    first_name: "MARILOU",
    last_name: "BOILARD",
    gender: "F",
    division: "F25-29",
    nationality: "CA",
    total_time: "04:22:57",
    splits: [
      {
        name: "swim_time",
        time: "00:29:10",
      },
      {
        name: "bike_time",
        time: "02:38:59",
      },
      {
        name: "run_time",
        time: "01:10:39",
      },
      {
        name: "t1_time",
        time: "00:02:19",
      },
      {
        name: "t2_time",
        time: "00:01:47",
      },
    ],
  },
];
