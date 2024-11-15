import React from 'react';
import { Home, Gift, ClipboardList, Users } from 'lucide-react';
import WoodSign from './ui/WoodSign';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: 'home' | 'inventory' | 'missions' | 'invite') => void;
};

export default function PageDialog({ isOpen, onClose, title, children, currentPage, onPageChange }: Props) {
  if (!isOpen) return null;

  const navItems = [
    { id: 'home', icon: Home, color: 'bg-sky-400', label: 'Home' },
    { id: 'inventory', icon: Gift, color: 'bg-pink-400', label: 'Inventory' },
    { id: 'missions', icon: ClipboardList, color: 'bg-yellow-400', label: 'Missions' },
    { id: 'invite', icon: Users, color: 'bg-purple-400', label: 'Invite' },
  ];

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Dialog */}
      <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[32px] max-h-[85vh] flex flex-col">
        {/* Title */}
        <div className="flex justify-center -mt-8 mb-4">
          <WoodSign text={title} />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {children}
        </div>

        {/* Footer Navigation */}
        <div className="p-4 pt-2 pb-8 border-t border-gray-100">
          <div className="grid grid-cols-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${item.color} p-3 rounded-xl flex items-center justify-center transition-transform ${
                  currentPage === item.id ? 'scale-95 opacity-75' : ''
                }`}
                onClick={() => onPageChange(item.id as 'home' | 'inventory' | 'missions' | 'invite')}
              >
                <item.icon className="w-6 h-6 text-white" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}