import React from 'react';
import { Lock } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-sky-400 p-4 rounded-t-3xl">
      <div className="flex items-center justify-between">
        <button className="text-black/80 text-lg font-medium">Закрыть</button>
        <div className="flex items-center gap-2">
          <span className="text-lg">🌱</span>
          <div>
            <h1 className="text-black/80 text-lg font-bold">TON Garden</h1>
            <p className="text-black/60 text-sm">мини-приложение</p>
          </div>
        </div>
        <button className="text-black/80 p-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="12" cy="20" r="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}