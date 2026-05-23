'use client';
import React from 'react';
import SidebarItem from './SidebarItem';
import {
  FiUsers,
  FiMessageSquare,
  FiPhone,
  FiBriefcase,
  FiUserPlus,
  FiDatabase
} from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';
import { PiAirplaneTilt } from 'react-icons/pi';
import { AiOutlineSound } from 'react-icons/ai';
import OrganizationSelector from '../leads/OrganizationSelector';

const Sidebar = () => {
  const mainNavItems = [
    { icon: MdOutlineDashboard, label: 'Dashboard' },
    { icon: PiAirplaneTilt, label: 'Generate Leads' },
    { icon: FiDatabase, label: 'Manage Leads', isActive: true },
    { icon: FiMessageSquare, label: 'Engage Leads' },
  ];

  const controlCenterItems = [
    { icon: FiUsers, label: 'Team Members' },
    { icon: AiOutlineSound, label: 'Lead Sources' },
    { icon: FiUserPlus, label: 'Ad Accounts' },
    { icon: FiMessageSquare, label: 'WhatsApp Account' },
    { icon: FiPhone, label: 'Tele Calling' },
    { icon: FiBriefcase, label: 'CRM Fields' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-[265px] shrink-0 h-screen bg-white border-r border-gray-100 overflow-hidden">
      {/* 1. Header (Logo) - Fixed/Not scrolling */}
      <div className="border-b border-gray-100 px-6 py-5 shrink-0">
        <a className="flex items-center" href="/">
          <div className="flex h-12 w-full items-center gap-2.5 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44" className="h-10 w-10 shrink-0">
              <g clipPath="url(#groweasy_svg__a)">
                <rect width="43" height="43" x="0.5" y="0.5" fill="#0F0F0F" rx="9.594" />
                <path fill="#FBFBFB" d="m28.282 22.731-21.5 21.501-6.795-6.794 21.5-21.501z" />
                <path fill="#FBFBFB" d="M8.877 15.938H28.28v6.795H8.877z" />
                <path fill="#FBFBFB" d="M28.28 15.938V35.34h-6.794V15.938z" />
                <path fill="#FBFBFB" d="M28.28 15.938V35.34h-6.793V15.938z" />
              </g>
              <defs>
                <clipPath id="groweasy_svg__a">
                  <rect width="43" height="43" x="0.5" y="0.5" fill="#fff" rx="9.594" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[25px] font-black tracking-tight text-gray-900 leading-none">
              GrowEasy
            </span>
          </div>
        </a>
      </div>

      {/* 2. Organization Selector - Fixed/Not scrolling */}
      <div className="border-b border-gray-100 px-5 py-4 shrink-0 bg-white">
        <OrganizationSelector />
      </div>

      {/* 3. Navigation Links - Scrollable area in the middle */}
      <nav className="flex-1 px-5 py-5 overflow-y-auto no-scrollbar space-y-6">
        <div>
          <h2 className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Main</h2>
          <ul className="mt-3 space-y-0.5">
            {mainNavItems.map((item) => (
              <SidebarItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={item.isActive}
              />
            ))}
          </ul>
        </div>

        <div>
          <h2 className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Control Center</h2>
          <ul className="mt-3 space-y-0.5">
            {controlCenterItems.map((item) => (
              <SidebarItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </ul>
        </div>
      </nav>

      {/* 4. Business Center - Fixed bottom block */}
      <div className="border-t border-gray-100 p-4 shrink-0 bg-white">
        <a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-gray-900 hover:bg-gray-50/60 hover:text-gray-950 font-semibold transition" href="#">
          <FiBriefcase className="h-[18px] w-[18px] shrink-0 text-gray-800" />
          <span className="text-[14px] tracking-tight">Business Center</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
