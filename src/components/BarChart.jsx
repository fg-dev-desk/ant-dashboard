import { Column } from '@ant-design/plots';

const BarChart = ({ data, title, height = 300, type = "monthly", color = "primary" }) => {
  const colorPalette = {
    primary: '#e91e63',
    success: '#4caf50', 
    info: '#1a73e8',
    warning: '#fb8c00',
    danger: '#f44336',
    dark: '#424242'
  };

  const selectedColor = colorPalette[color] || colorPalette.primary;

  const chartData = data.labels.map((label, index) => ({
    category: label,
    value: data.values[index]
  }));

  const config = {
    data: chartData,
    xField: 'category',
    yField: 'value',
    height: height,
    color: selectedColor,
    columnStyle: {
      radius: [4, 4, 0, 0],
      fill: selectedColor,
    },
    onReady: (plot) => {
      if (plot?.chart?.geometries?.[0]) {
        plot.chart.geometries[0].color(selectedColor);
      }
    },
    meta: {
      value: {
        alias: 'Valor',
      },
      category: {
        alias: type === 'weekly' ? 'Día' : 'Semana',
      },
    },
  };

  return <Column {...config} />;
};

export default BarChart;