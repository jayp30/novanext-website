'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  { month: 'Jan', sales: 15438 },
  { month: 'Feb', sales: 25315 },
  { month: 'Mar', sales: 19671 },
  { month: 'Apr', sales: 22679 },
  { month: 'May', sales: 17347 },
  { month: 'Jun', sales: 17782 },
];

const chartConfig = {
  sales: {
    label: 'Sales',
    color: 'hsl(var(--primary))',
  },
};


export function SalesChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `₹${value / 1000}k`}
          />
          <Tooltip content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()}`} />} />
          <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
