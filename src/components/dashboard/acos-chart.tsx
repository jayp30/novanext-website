'use client';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import {
    ChartContainer,
    ChartTooltipContent,
  } from '@/components/ui/chart';

const data = [
  { month: 'Jan', acos: 35 },
  { month: 'Feb', acos: 32 },
  { month: 'Mar', acos: 30 },
  { month: 'Apr', acos: 28 },
  { month: 'May', acos: 29 },
  { month: 'Jun', acos: 28.2 },
];


const chartConfig = {
    acos: {
      label: 'ACOS',
      color: 'hsl(var(--accent))',
    },
  };

export function AcosChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
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
                tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="acos" stroke="var(--color-acos)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
