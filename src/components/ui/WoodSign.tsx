import React from 'react';

type Props = {
  text: string;
};

export default function WoodSign({ text }: Props) {
  return (
    <div className="relative">
      <div className="bg-[#8B4513] text-white text-2xl font-bold px-12 py-3 rounded-xl shadow-lg border-4 border-[#654321] transform -rotate-1">
        <div className="relative z-10">{text}</div>
        <div className="absolute inset-0 bg-black/10 rounded-lg" />
      </div>
      {/* Wood grain effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-px bg-black/40"
            style={{
              top: `${20 + i * 20}%`,
              transform: `rotate(${-1 + Math.random() * 2}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}