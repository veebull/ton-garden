import React from 'react';

export default function InviteTable() {
  return (
    <div className="bg-yellow-400 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-2 gap-4 p-4 font-bold">
        <div>#NAME</div>
        <div className="text-right">BONUS</div>
      </div>

      {/* Empty State */}
      <div className="bg-[#FFE4B5] p-6 text-center text-gray-700 font-medium">
        No invitees
      </div>
    </div>
  );
}