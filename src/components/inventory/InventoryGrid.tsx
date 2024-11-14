import React from 'react';

type Item = {
  id: string;
  count: number;
  icon: string;
};

type Props = {
  items: Item[];
};

export default function InventoryGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="aspect-square bg-green-300 rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg"
        >
          <div className="text-4xl">{item.icon}</div>
          <div className="bg-yellow-400 w-full text-center py-1 rounded-lg font-bold">
            x{item.count}
          </div>
        </div>
      ))}
    </div>
  );
}