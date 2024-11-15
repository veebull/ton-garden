import React from 'react';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MysteryBoxModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-2xl font-bold">OPEN BOX</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Mystery Box Display */}
          <div className="bg-[#90EE90] rounded-2xl p-8 mb-6">
            <div className="flex flex-col items-center">
              <img 
                src="/mystery-box.png" 
                alt="Mystery Box"
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Mistery Box</h3>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-6">
            <span className="text-red-500">You have no box to open. </span>
            <button className="text-blue-500 font-medium">
              Purchase more
            </button>
          </div>

          {/* Open Button */}
          <button 
            className="w-full bg-[#90EE90] text-gray-400 font-bold py-4 rounded-xl text-xl cursor-not-allowed"
            disabled
          >
            OPEN
          </button>
        </div>
      </div>
    </div>
  );
}