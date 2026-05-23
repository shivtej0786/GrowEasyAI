'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeadDetails } from '../../redux/slices/selectedLeadSlice';
import { FiCalendar, FiCheckCircle, FiCheck, FiChevronRight } from 'react-icons/fi';

const LeadRow = ({ lead, onSetFollowUp }) => {
  const dispatch = useDispatch();
  const selectedLead = useSelector((state) => state.selectedLead.data);
  const isSelected = selectedLead?.id === lead.id;

  const handleRowClick = () => {
    if (!isSelected) {
      dispatch(fetchLeadDetails(lead.id));
    }
  };

  return (
    <tr
      className={`cursor-pointer group hover:bg-gray-50/50 transition-colors duration-150 relative border-b border-gray-100/50 ${
        isSelected ? 'bg-emerald-50/50 group-hover:bg-emerald-50/50' : ''
      }`}
      onClick={handleRowClick}
    >
      {/* 1. LEAD NAME */}
      <td className="p-4 text-sm font-extrabold text-gray-900">{lead.name}</td>

      {/* 2. EMAIL */}
      <td className="p-4 text-sm text-gray-500 font-bold">{lead.email}</td>

      {/* 3. CONTACT */}
      <td className="p-4 text-sm text-gray-500 font-bold">{lead.mobile}</td>

      {/* 4. DATE CREATED */}
      <td className="p-4 text-sm text-gray-500 font-bold whitespace-nowrap">{lead.created_at}</td>

      {/* 5. COMPANY */}
      <td className="p-4 text-sm text-gray-500 font-bold">{lead.company}</td>

      {/* 6. STATUS */}
      <td className="p-4 text-sm">
        <span className="inline-flex items-center rounded-full bg-[#f3f4f6]/80 px-3 py-1.5 text-xs font-bold text-gray-500">
          Not Dialed
        </span>
      </td>

      {/* 7. QUALITY */}
      <td className="p-4 text-sm">
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#f3f4f6]/80 text-xs font-bold text-gray-400">
          —
        </span>
      </td>

      {/* 8. LEAD OWNER - Semi-rounded rectangular badge (rounded-[8px]) */}
      <td className="p-4 text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-gray-200/50 bg-[#f9fafb] px-3 py-1.5 text-xs font-bold text-gray-600 shadow-sm">
          {lead.owner} <span className="text-[11px] text-gray-400 font-normal">✎</span>
        </span>
      </td>

      {/* 9. SOURCE - Fully rounded capsule pill (rounded-full) */}
      <td className="p-4 text-sm">
        <span className="inline-flex items-center rounded-full bg-[#f3f4f6]/80 px-4 py-1.5 text-xs font-bold text-gray-600">
          {lead.source}
        </span>
      </td>

      {/* 10. NEXT FOLLOW UP - Semi-rounded rectangular button (rounded-[8px]) */}
      <td className="p-4 text-sm">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSetFollowUp && onSetFollowUp(lead);
          }}
          className="inline-flex items-center gap-2 rounded-[8px] border border-gray-200/60 bg-[#f9fafb] px-3.5 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50 transition shadow-sm"
        >
          <FiCalendar className="text-gray-400 h-3.5 w-3.5" /> Set Follow Up
        </button>
      </td>

      {/* 11. CALL STATUS TODAY - Rounded-[10px] styled buttons/badges */}
      <td className="p-4 text-sm">
        {lead.call_status_today === 'Done' ? (
          <span className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#e1f2f1]/50 px-4 py-1.5 text-xs font-bold text-[#225e57] border border-[#225e57]/10 shadow-sm">
            <FiCheckCircle className="h-3.5 w-3.5 text-[#225e57]" /> Done
          </span>
        ) : (
          <button className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#225e57] text-white px-4 py-1.5 text-xs font-bold hover:bg-[#1d4f49] shadow-sm transition">
            <FiCheck className="text-white h-3.5 w-3.5" /> Mark done
          </button>
        )}
      </td>

      {/* 12. ACQUISITION_SOURCE */}
      <td className="p-4 text-sm font-bold text-gray-500">{lead.acquisition_source}</td>

      {/* 13. ACTIONS (Sticky Right) */}
      <td className={`sticky right-0 border-l border-gray-100 p-4 shadow-[-8px_0_8px_-4px_rgba(0,0,0,0.03)] z-10 transition-colors duration-150 bg-white group-hover:bg-gray-50 ${
        isSelected ? 'bg-emerald-50/50 group-hover:bg-emerald-50/50' : ''
      }`}>
        <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
          More <FiChevronRight className="text-gray-400 h-3.5 w-3.5" />
        </button>
      </td>
    </tr>
  );
};

export default LeadRow;
