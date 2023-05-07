

export type ChartData = {
  time: number;
  value: number;
};

export type ChartType = {
  [series: string]: ChartData[];
};
