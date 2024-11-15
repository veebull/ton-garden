import React from 'react';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BuySlotModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-2xl font-bold">BUY MORE SLOT</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Slot Image */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1628196237219-9d0ab2aaf881?w=300&h=300&fit=crop"
              alt="Garden Plot"
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-center text-lg mb-6">
            Unlock to get three more slots.
          </p>

          {/* Price */}
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2">
              <img src="/ton-logo.png" alt="TON" className="w-6 h-6" />
              <span className="text-2xl font-bold">4.99 TON</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-[#4CAF50] text-white font-bold py-4 rounded-xl text-xl hover:bg-[#45A049] transition-colors">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}