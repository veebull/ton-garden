import React from 'react';
import { Home, Gift, ClipboardList, Users } from 'lucide-react';

type Props = {
  currentPage: string;
  onPageChange: (page: 'home' | 'inventory' | 'missions' | 'invite') => void;
};

export default function BottomNav({ currentPage, onPageChange }: Props) {
  const navItems = [
    { id: 'home', icon: Home, color: 'bg-sky-400', label: 'Home' },
    { id: 'inventory', icon: Gift, color: 'bg-pink-400', label: 'Inventory' },
    { id: 'missions', icon: ClipboardList, color: 'bg-yellow-400', label: 'Missions' },
    { id: 'invite', icon: Users, color: 'bg-purple-400', label: 'Invite' },
  ];

  return (
    <div className="bg-white p-4 pt-2 pb-8 rounded-t-3xl shadow-lg">
      {/* Balance display */}
      <div className="bg-sky-100 rounded-xl p-3 mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src="/ton-logo.png" alt="TON" className="w-4 h-4" />
          <span className="font-mono">0.00000164</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-500">●</span>
          <span className="font-mono">0.00013638</span>
        </div>
      </div>

      {/* Harvest button */}
      <button className="w-full bg-green-500 text-white font-bold py-3 rounded-xl mb-4 hover:bg-green-600 transition-colors">
        HARVEST
      </button>

      {/* Navigation */}
      <div className="grid grid-cols-4 gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${item.color} p-3 rounded-xl flex items-center justify-center transition-transform ${
              currentPage === item.id ? 'scale-95' : ''
            }`}
            onClick={() => onPageChange(item.id as 'home' | 'inventory' | 'missions' | 'invite')}
          >
            <item.icon className="w-6 h-6 text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}