import React from 'react';
import { Minus, Plus } from 'lucide-react';
import InventoryGrid from '../inventory/InventoryGrid';
import InventoryItem from '../inventory/InventoryItem';
import WoodSign from '../ui/WoodSign';

export default function Inventory() {
  const items = [
    { id: 'mystery', name: 'Mystery Box', price: '0.0125', count: 0, icon: '❓' },
    { id: 'watering', name: 'Intensive Watering', price: '0.0125', count: 2, icon: '🚿' },
    { id: 'pesticide', name: 'Pesticide', price: '0.025', count: 0, icon: '🧪' },
    { id: 'tractor', name: 'Tractor', price: '0.05', count: 0, icon: '🚜' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-sky-300 overflow-y-auto">
      <div className="p-4 flex flex-col gap-6">
        {/* Title */}
        <div className="flex justify-center -mb-2">
          <WoodSign text="Inventory" />
        </div>

        {/* Grid */}
        <InventoryGrid items={items} />

        {/* Items List */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <InventoryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}