"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

const FollowUpModal = ({ open, onClose, leadName, onSave }) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    if (open) {
      // default to current datetime in local "yyyy-MM-ddTHH:mm" format
      const now = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const val = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
      setDateTime(val);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 transition-opacity" onClick={onClose} />
      
      {/* Modal Content - exact visual parity with screenshot */}
      <div className="relative z-10 w-full max-w-[440px] rounded-[32px] bg-white p-8 shadow-2xl transition-all select-none">
        
        {/* Header Block */}
        <div className="flex items-start justify-between">
          <h3 className="text-[22px] font-black text-gray-900 tracking-tight leading-none">Set Next Follow Up</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition"
          >
            <FiX className="h-6 w-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Subtitle Block */}
        <p className="text-[15px] text-gray-400 font-medium mt-3">
          for <span className="text-gray-950 font-extrabold ml-1">{leadName}</span>
        </p>

        {/* Input Block */}
        <div className="mt-6">
          <label className="block text-[13px] font-bold text-gray-400 tracking-wide uppercase">Follow Up Date & Time</label>
          <input
            type="datetime-local"
            className="w-[240px] border border-gray-200 rounded-[16px] px-4 py-3 text-[14px] font-bold text-gray-800 bg-[#fcfcfc] mt-2 outline-none focus:border-[#225e57] focus:ring-1 focus:ring-[#225e57]/20 transition"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        {/* Actions Row - exact matching buttons styling (stretched, rounded-[16px]) */}
        <div className="flex items-center gap-4 mt-8">
          <button 
            onClick={onClose} 
            className="flex-1 py-3.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-550 font-extrabold text-[15px] rounded-[16px] shadow-sm transition text-center"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave && onSave(dateTime);
              onClose();
            }}
            className="flex-1 py-3.5 bg-[#225e57] hover:bg-[#1d4f49] text-white font-extrabold text-[15px] rounded-[16px] shadow-sm transition text-center"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default FollowUpModal;
