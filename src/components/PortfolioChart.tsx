'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AssetData {
  symbol: string;
  value: number;
  color: string;
}

interface PortfolioChartProps {
  assets: AssetData[];
}

export const PortfolioChart = ({ assets }: PortfolioChartProps) => {
  const data = {
    labels: assets.map(asset => asset.symbol),
    datasets: [
      {
        data: assets.map(asset => asset.value),
        backgroundColor: assets.map(asset => asset.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#F5F7FA',
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: $${value.toFixed(2)} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};