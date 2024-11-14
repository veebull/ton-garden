import React from 'react';
import { Minus, Plus } from 'lucide-react';

type Props = {
  id: string;
  name: string;
  price: string;
  icon: string;
};

export default function InventoryItem({ id, name, price, icon }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg">
      <div className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center text-2xl">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center gap-1 text-sky-500">
          <span className="text-lg">💎</span>
          <span>{price} TON</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <Minus className="w-5 h-5" />
        </button>
        <span className="w-8 text-center font-medium">01</span>
        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-xl">
        BUY
      </button>
    </div>
  );
}