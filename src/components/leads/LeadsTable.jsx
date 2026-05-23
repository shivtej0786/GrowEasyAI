'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from '../../redux/slices/leadsSlice';
import LeadRow from './LeadRow';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import EmptyState from '../ui/EmptyState';
import { FiRefreshCw } from 'react-icons/fi';

const LeadsTable = ({ onSetFollowUp }) => {
  const dispatch = useDispatch();
  const { data: leads, status } = useSelector((state) => state.leads);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLeads());
    }
  }, [status, dispatch]);

  const filteredLeads = leads.data?.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (lead.mobile && lead.mobile.includes(searchTerm))
  );

  const handleRefresh = () => {
    dispatch(fetchLeads());
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Title & Search Panel - exact styling from screenshot */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-[17px] font-extrabold text-gray-900">Your Leads</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Unified search input and teal button */}
          <div className="relative flex items-center h-10 flex-1 sm:flex-initial sm:w-80 border border-gray-200 rounded-[14px] overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#225e57]/10 focus-within:border-[#225e57] transition">
            <input
              type="text"
              placeholder="Enter email or phone number..."
              className="h-full w-full pl-4 pr-12 outline-none text-xs font-bold text-gray-700 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-0 top-0 bottom-0 flex items-center justify-center bg-[#225e57] hover:bg-[#1d4f49] text-white transition shadow-sm rounded-r-[13px] h-full w-12 shrink-0">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          {/* Square rounded refresh button */}
          <button 
            onClick={handleRefresh}
            className="flex items-center justify-center h-10 w-10 rounded-[14px] border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm transition shrink-0"
          >
            <FiRefreshCw size={14} />
          </button>
        </div>
      </div>

      {status === 'loading' && <LoadingSkeleton />}
      {status === 'succeeded' && filteredLeads && filteredLeads.length > 0 && (
         <>
          <div className="overflow-x-auto relative rounded-2xl border border-gray-100 bg-white">
            <table className="w-full whitespace-nowrap table-auto border-collapse">
              <thead className="text-left text-[11px] text-gray-800 font-extrabold uppercase bg-white tracking-wider border-b border-gray-100">
                <tr>
                  <th className="p-4 font-extrabold">Lead Name</th>
                  <th className="p-4 font-extrabold">Email</th>
                  <th className="p-4 font-extrabold">Contact</th>
                  <th className="p-4 font-extrabold">Date Created</th>
                  <th className="p-4 font-extrabold">Company</th>
                  <th className="p-4 font-extrabold">Status</th>
                  <th className="p-4 font-extrabold">Quality</th>
                  <th className="p-4 font-extrabold">Lead Owner</th>
                  <th className="p-4 font-extrabold">Source</th>
                  <th className="p-4 font-extrabold">Next Follow Up</th>
                  <th className="p-4 font-extrabold">Call Status Today</th>
                  <th className="p-4 font-extrabold">Acquisition Source</th>
                  <th className="sticky right-0 bg-white border-l border-gray-100 p-4 font-extrabold shadow-[-8px_0_8px_-4px_rgba(0,0,0,0.03)] z-20">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredLeads.map((lead) => (
                  <LeadRow key={lead.id} lead={lead} onSetFollowUp={onSetFollowUp} />
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Load More Button */}
          <div className="mt-6 flex justify-center">
            <button className="px-7 py-2.5 bg-white border border-gray-200 text-[#225e57] text-xs font-bold rounded-full hover:bg-gray-50/50 transition shadow-sm">
              Load more
            </button>
          </div>
        </>
      )}
      {status === 'succeeded' && (!filteredLeads || filteredLeads.length === 0) && <EmptyState />}
    </div>
  );
};

export default LeadsTable;
