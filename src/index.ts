import 'chartist/dist/index.css';
import { LineChart, Interpolation, FixedScaleAxis } from 'chartist';

import { ChartType } from './ChartType';
import { data } from './test-data';

const chart = new LineChart(
  '#chart',
  {
    series: [],
  },
  {
    lineSmooth: Interpolation.step(),
    height: '100%',
    low: 0,

    axisX: {
      type: FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: value => {
        const date = new Date(value);
        return date.toLocaleString(undefined, {
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        });
      }

    },
  }
);

const update = (value: ChartType) => {
  const series = [];
  for (const seriesName in value) {
    const values = value[seriesName] ?? [];
    const data = values.map((entry) => {
      return {
        x: new Date(entry.time),
        y: entry.value,
      };
    });
    series.push({
      name: seriesName,
      data,
    });
  }
  const data = {
    series,
  };
  chart.update(data);
};

update(data);

window.addEventListener('message', (ev) => {
  const data = ev.data;
  if (!data) return;
  if (data.type == 'update-chart') {
    update(data.value);
  }
});
