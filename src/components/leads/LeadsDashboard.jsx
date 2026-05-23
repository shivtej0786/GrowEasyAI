'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LeadsTable from './LeadsTable';
import LeadDetailsDrawer from './LeadDetailsDrawer';
import FollowUpModal from '../ui/FollowUpModal';
import { 
  FiCalendar, 
  FiChevronDown, 
  FiX, 
  FiUsers, 
  FiPhone, 
  FiTarget, 
  FiPercent, 
  FiXCircle 
} from 'react-icons/fi';

const PerformanceCard = ({ title, value, icon: Icon }) => (
  <div className="flex-1 min-w-[220px] rounded-[24px] border border-gray-100 bg-gradient-to-br from-white via-white to-[#e1f2f1]/35 p-6 shadow-sm flex flex-col justify-between select-none">
    {/* Top Row: Title & Bare Icon */}
    <div className="flex justify-between items-start">
      <span className="text-[15px] font-bold text-gray-500">{title}</span>
      <Icon className="h-6 w-6 text-gray-400 stroke-[1.8]" />
    </div>
    {/* Bottom Row: Big Bold Value */}
    <div className="mt-5">
      <span className="text-[38px] font-black text-gray-900 leading-none">{value}</span>
    </div>
  </div>
);

const LeadsDashboard = () => {
  const selectedLead = useSelector((state) => state.selectedLead.data);
  const [followUpLead, setFollowUpLead] = useState(null);

  return (
    <div className="space-y-6">
      {/* Filters Panel - Styled exactly like Screenshot 2 */}
      <div className="space-y-4">
        {/* Row 1: Dropdown triggers */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
              Status <FiChevronDown className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
              Quality <FiChevronDown className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
              Source <FiChevronDown className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
              Owner <FiChevronDown className="text-gray-400" />
            </button>
          </div>
          <button className="text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1.5 transition">
            <FiXCircle size={14} className="text-gray-400" /> Clear All
          </button>
        </div>

        {/* Row 2: Date Pickers and ranges */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Created Date Range</p>
          <div className="flex flex-wrap items-center gap-3">
            {/* Active Date Picker Pill */}
            <div className="flex items-center gap-2.5 px-4 py-2 border border-emerald-200 bg-[#e1f2f1]/30 rounded-full text-xs font-bold text-[#225e57] shadow-sm">
              <FiCalendar className="text-[#225e57] h-3.5 w-3.5" />
              <span>19 Apr 2026 - 18 May 2026</span>
              <button className="flex items-center justify-center h-4 w-4 bg-[#225e57] hover:bg-[#1d4f49] text-white rounded-full transition-colors shadow">
                <FiX size={10} />
              </button>
            </div>

            {/* Quick selectors */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <button className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm">Today</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm">Last 7 Days</button>
              <button className="px-4 py-2 rounded-full border border-emerald-500 bg-[#e1f2f1]/50 text-[#225e57] font-bold hover:bg-[#e1f2f1] transition shadow-sm">Last 30 Days</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm">Last 2 Months</button>
            </div>

            <button className="text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1 transition">
              <FiX size={14} className="text-gray-400" /> Clear Date
            </button>
          </div>
        </div>

        {/* Row 3: Active Filter Badges */}
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50/50 px-3 py-1.5 text-xs font-bold text-[#225e57] border border-emerald-200/50 shadow-sm">
            Status: Not Dialed
            <button className="text-emerald-700 hover:text-emerald-950 font-bold">
              <FiX size={12} />
            </button>
          </span>
        </div>
      </div>

      {/* Performance Overview Cards */}
      <div className="space-y-3.5">
        <h3 className="text-[17px] font-bold text-gray-900">Performance Overview</h3>
        <div className="flex flex-wrap gap-4">
          <PerformanceCard title="Total Leads" value="45" icon={FiUsers} />
          <PerformanceCard title="Contacted Leads" value="0" icon={FiPhone} />
          <PerformanceCard title="Sales Done" value="0" icon={FiTarget} />
          <PerformanceCard title="Conversion Rate" value="0.0%" icon={FiPercent} />
        </div>
      </div>

      {/* Table & Details Drawer Split Grid */}
      <div className={`flex gap-6 items-stretch ${selectedLead ? 'flex-col lg:flex-row' : 'flex-row'}`}>
        <div className={`${selectedLead ? 'w-full lg:w-1/2' : 'flex-1'} min-w-0`}>
          <LeadsTable onSetFollowUp={setFollowUpLead} />
        </div>
        <LeadDetailsDrawer onSetFollowUp={setFollowUpLead} />
      </div>

      {/* Global Viewport-level Follow Up Modal - covers full screen perfectly */}
      {followUpLead && (
        <FollowUpModal
          open={!!followUpLead}
          leadName={followUpLead.name}
          onClose={() => setFollowUpLead(null)}
          onSave={(date) => {
            // Save logic placeholder
          }}
        />
      )}
    </div>
  );
};

export default LeadsDashboard;
