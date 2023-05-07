
import { ChartType } from "./ChartType";

export type WindowTabCountHistoryEntry = {
  windowId: number;
  time: number; // milliseconds since epoch
  count: number;
};

export type WindowTabCountHistory = {
  [windowId: number]: WindowTabCountHistoryEntry[];
};

const origData: WindowTabCountHistory = {
  "3": [
    {
      "windowId": 3,
      "time": 1683462359530,
      "count": 58
    },
    {
      "windowId": 3,
      "time": 1683462368266,
      "count": 59
    },
    {
      "windowId": 3,
      "time": 1683462370277,
      "count": 58
    },
    {
      "windowId": 3,
      "time": 1683462381194,
      "count": 57
    },
    {
      "windowId": 3,
      "time": 1683462381215,
      "count": 56
    },
    {
      "windowId": 3,
      "time": 1683462381236,
      "count": 55
    },
    {
      "windowId": 3,
      "time": 1683462381256,
      "count": 54
    }
  ]
};

const data: ChartType = {};
for (const series in origData) {
  const values = origData[series] ?? [];
  data[series] = values.map((entry) => {
    return {
      time: entry.time,
      value: entry.count,
    };
  });
}

export { data };
