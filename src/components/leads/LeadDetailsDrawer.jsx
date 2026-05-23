"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedLead } from '../../redux/slices/selectedLeadSlice';
import ActivityTimeline from './ActivityTimeline';
import { 
  FiMail, 
  FiPhone, 
  FiX, 
  FiCheckCircle, 
  FiCalendar, 
  FiBriefcase, 
  FiTrendingUp, 
  FiUser, 
  FiTag, 
  FiMessageCircle, 
  FiShare2, 
  FiPhoneCall, 
  FiChevronDown 
} from 'react-icons/fi';

const LeadDetailsDrawer = ({ onSetFollowUp }) => {
  const dispatch = useDispatch();
  const { data: lead, status } = useSelector((state) => state.selectedLead);

  if (!lead && status !== 'loading') {
    return null;
  }

  // Exact static activities sequence from user screenshots
  const staticActivitiesList = [
    {
      id: 'activity-1',
      type: 'PHONE_CALL',
      title: 'Outbound Call Made',
      description: 'Outbound call initiated by SHIVAM YADAV using did 919484958203',
      created_at: '10:30 AM',
      direction: 'OUTBOUND',
      created_by_type: 'SYSTEM',
    },
    {
      id: 'activity-2',
      type: 'CUSTOM',
      title: 'Campaign Created',
      description: 'New "Photography and Videography" campaign created in draft',
      created_at: '4:56 AM',
      created_by_type: 'SYSTEM',
      metadata: {
        campaign_id: 'aDlsFKo8uGVZ9EU9KziGvTvDPvo2_1779146809939',
        content: `We want to promote Kalakarfilms Production House - specializing in:

• Cinematic Wedding Films
• Pre-Wedding Shoots
• Same Day Edit Reels
• Event Coverage
• Commercial & Brand Shoots
• Creative Instagram Reels

Our goal is to sell a premium cinematic experience that turns memories into films. 🎥✨`,
      }
    },
    {
      id: 'activity-3',
      type: 'WA_MESSAGE',
      title: 'WhatsApp Message Sent',
      description: 'Initial greeting and introduction sent',
      created_at: '4:55 AM',
      direction: 'OUTBOUND',
      created_by_type: 'SYSTEM',
      metadata: {
        content: `Hi ${lead?.name || 'KALAKAR FILMS (SACHIN SINGH)'},
Welcome to GrowEasy!

We help businesses like yours get leads effortlessly. Can we share a quick demo on how to launch your first campaign?`,
      }
    },
    {
      id: 'activity-4',
      type: 'NEW_LEAD',
      title: 'Lead Generated',
      description: 'New lead captured from website',
      created_at: '4:55 AM',
      created_by_type: 'SYSTEM',
    }
  ];

  return (
    <aside className={`w-full min-w-0 lg:w-1/2 lg:max-w-none rounded-l-[28px] border-l border-gray-200 bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col lg:h-[calc(100vh-2rem)] ${lead ? 'translate-x-0' : 'translate-x-full'}`}>
      {status === 'loading' && (
        <div className="flex justify-center items-center h-full text-gray-500 font-medium">
          Loading details...
        </div>
      )}
      {status === 'succeeded' && lead && (
        <>
          {/* Header Block with Actions Restored */}
          <div className="border-b border-gray-100 px-6 py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="truncate text-[22px] font-extrabold leading-7 text-gray-900 tracking-tight">
                  {lead.name}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
                    Bad Lead <span className="ml-1 text-[10px]">✎</span>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                    Quality -
                  </span>
                </div>
                <div className="mt-2.5 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                  Owned by <span className="ml-1 font-bold text-gray-800">SHIVAM YADAV</span> <span className="ml-1 text-[10px]">✎</span>
                </div>
              </div>
              <button 
                onClick={() => dispatch(clearSelectedLead())} 
                className="mt-0.5 rounded-full border border-gray-100 p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Quick Actions Restored */}
            <div className="mt-4 flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 transition">
                <FiPhoneCall size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 transition">
                <FiMessageCircle size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 transition">
                <FiShare2 size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 transition">
                <FiCalendar size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Container with Grid and Form Fields Restored */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 no-scrollbar">
            <div className="space-y-6 pb-6">
              
              {/* Fields Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiMail size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Email</p>
                    <p className="truncate text-sm font-semibold text-gray-900">{lead.email || '-'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiPhone size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Contact Number</p>
                    <p className="truncate text-sm font-semibold text-gray-900">{lead.mobile || '-'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiTag size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Status</p>
                    <p className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-800">
                      Bad Lead <span className="ml-1 text-[10px] text-red-400">✎</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiTrendingUp size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Quality</p>
                    <p className="text-sm font-semibold text-gray-900">-</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiUser size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Owner</p>
                    <p className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-900">
                      SHIVAM YADAV <span className="ml-1 text-[10px] text-gray-500">✎</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiBriefcase size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Source</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {lead.source?.type ? lead.source.type.toLowerCase() : lead.source || '-'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Status Today Card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-[#225e57]">
                      <FiPhoneCall size={18} />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Call Status Today</h4>
                      <p className="mt-1 text-sm text-gray-500">You have called this lead today.</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center rounded-xl border border-emerald-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-[#225e57] shadow-sm hover:bg-brand-100 transition">
                    <FiCheckCircle className="mr-2"/> Done
                  </button>
                </div>
              </div>

              {/* Follow Up Card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-3 text-base font-bold text-gray-900">Follow Up</p>
                <button 
                  onClick={() => onSetFollowUp && onSetFollowUp(lead)} 
                  className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm font-semibold text-[#225e57] hover:bg-gray-50 transition"
                >
                  <FiCalendar className="text-gray-500"/> Set Follow Up Date
                </button>
              </div>

              {/* Lead Summary Card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-base font-bold text-gray-900">Lead Summary</p>
                  <FiChevronDown className="text-gray-400" />
                </div>
                <p className="mt-4 text-sm italic text-gray-400">No summary available.</p>
              </div>

              {/* Styled Static Timeline rendered perfectly below */}
              <ActivityTimeline activities={staticActivitiesList} />

            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default LeadDetailsDrawer;
