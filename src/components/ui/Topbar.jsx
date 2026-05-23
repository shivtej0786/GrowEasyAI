'use client';
import React from 'react';
import { FiBell, FiPlus, FiHelpCircle } from 'react-icons/fi';

const Topbar = () => {
  return (
    <header className="bg-white px-6 py-5 border-b border-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shrink-0">
      <div>
        <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight leading-7">Manage Your Leads</h1>
        <p className="text-xs text-gray-400 mt-1 font-medium">Monitor lead status, assign tasks, and close deals faster.</p>
      </div>
      <div className="flex items-center gap-3 self-start md:self-auto">
        <button className="p-2 rounded-full hover:bg-gray-50 text-gray-500 transition">
          <FiHelpCircle size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-50 text-gray-500 transition">
          <FiBell size={20} />
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#225e57] text-white rounded-full text-xs font-bold hover:bg-[#1d4f49] shadow-sm transition whitespace-nowrap">
          <FiPlus />
          Enter Passphrase
        </button>
      </div>
    </header>
  );
};

export default Topbar;
