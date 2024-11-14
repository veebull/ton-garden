import React from 'react';
import { Share } from 'lucide-react';
import WoodSign from '../ui/WoodSign';
import StatsCard from '../invite/StatsCard';
import InviteTable from '../invite/InviteTable';

export default function Invite() {
  return (
    <div className="flex-1 flex flex-col bg-sky-300 overflow-y-auto">
      <div className="p-4 flex flex-col gap-6">
        {/* Title */}
        <div className="flex justify-center -mb-2">
          <WoodSign text="Invite" />
        </div>

        {/* Description */}
        <p className="text-center text-gray-700 px-4">
          Invite frens and receive 1 mistery box for every registration. You can also receive bonuses for completed missions by your friends.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            title="My Friends"
            subtitle="Number of invited friends"
            value="0"
            icon="❤️"
            color="bg-white border-green-500"
          />
          <StatsCard
            title="Commission"
            subtitle="Commissions you receive"
            value="0"
            icon="⭐"
            color="bg-white border-orange-500"
            valuePrefix={<img src="/ton-logo.png" alt="TON" className="w-5 h-5" />}
          />
        </div>

        {/* Invite Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-green-500 text-white font-bold py-4 rounded-2xl text-lg hover:bg-green-600 transition-colors">
            COPY LINK INVITE
          </button>
          <button className="bg-green-500 p-4 rounded-2xl hover:bg-green-600 transition-colors">
            <Share className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Invitees Table */}
        <InviteTable />
      </div>
    </div>
  );
}