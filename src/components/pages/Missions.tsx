import React from 'react';
import { ChevronRight } from 'lucide-react';
import WoodSign from '../ui/WoodSign';
import MissionItem from '../missions/MissionItem';

export default function Missions() {
  const missions = [
    { id: 1, title: 'Earn $BLUM', reward: '1 BOX' },
    { id: 2, title: 'Like & Retweet this post', reward: '1 BOX' },
    { id: 3, title: 'Play & earn PAWS', reward: '1 BOX' },
    { id: 4, title: 'Play & earn $TON', reward: '1 BOX' },
    { id: 5, title: 'Play Wolflist', reward: '1 BOX' },
    { id: 6, title: 'Join Telegram channel', reward: '1 BOX' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-sky-300 overflow-y-auto">
      <div className="p-4 flex flex-col gap-6">
        {/* Title */}
        <div className="flex justify-center -mb-2">
          <WoodSign text="Missions" />
        </div>

        {/* Mission List */}
        <div className="flex flex-col gap-3">
          {missions.map((mission) => (
            <MissionItem key={mission.id} {...mission} />
          ))}
        </div>
      </div>
    </div>
  );
}