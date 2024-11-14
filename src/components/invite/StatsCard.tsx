import React, { ReactNode } from 'react';

type Props = {
  title: string;
  subtitle: string;
  value: string;
  icon: string;
  color: string;
  valuePrefix?: ReactNode;
};

export default function StatsCard({ title, subtitle, value, icon, color, valuePrefix }: Props) {
  return (
    <div className={`${color} border-2 rounded-2xl p-4 flex flex-col items-center text-center`}>
      <div className="text-2xl mb-1">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
      <div className="flex items-center gap-1 text-3xl font-bold">
        {valuePrefix}
        {value}
      </div>
    </div>
  );
}