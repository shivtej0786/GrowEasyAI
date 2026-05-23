'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrganizations } from '../../redux/slices/organizationSlice';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

const OrganizationSelector = () => {
  const dispatch = useDispatch();
  const { data: organizations, status } = useSelector((state) => state.organizations);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrganizations());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === 'succeeded' && organizations.data && organizations.data.length > 0) {
      setSelectedOrg(organizations.data[0]);
    }
  }, [status, organizations]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOrg = (org) => {
    setSelectedOrg(org);
    setIsOpen(false);
  };

  // Pure CSS high-fidelity geometric branding icons matching screenshots
  const renderOrgIcon = (name) => {
    const normName = name.toLowerCase();
    
    if (normName.includes('groweasy')) {
      return (
        <div className="relative h-10 w-10 shrink-0 rounded-[14px] bg-gradient-to-br from-[#1e617a] to-[#0f3a4b] overflow-hidden flex items-center justify-center shadow-sm">
          {/* Stylized orange diamond shape */}
          <div className="absolute rotate-45 h-5 w-5 bg-gradient-to-tr from-orange-400 to-amber-500 transform translate-y-1 -translate-x-1"></div>
          {/* Stylized white slash line */}
          <div className="absolute h-[1.5px] w-[140%] bg-white/90 rotate-[-40deg]"></div>
        </div>
      );
    }
    
    if (normName.includes('test corp') || normName.includes('acme')) {
      return (
        <div className="relative h-10 w-10 shrink-0 rounded-[14px] bg-gradient-to-br from-[#38bdf8] to-[#0284c7] overflow-hidden flex items-center justify-center shadow-sm">
          {/* Stylized orange triangle */}
          <div className="absolute rotate-[30deg] border-b-[14px] border-b-orange-400 border-x-[8px] border-x-transparent transform -translate-x-1.5 translate-y-1"></div>
          {/* Stylized white slash line */}
          <div className="absolute h-[1.5px] w-[140%] bg-white/90 rotate-[-40deg]"></div>
        </div>
      );
    }
    
    if (normName.includes('vk test')) {
      return (
        <div className="relative h-10 w-10 shrink-0 rounded-[14px] bg-gradient-to-br from-[#10b981] to-[#047857] overflow-hidden flex items-center justify-center shadow-sm">
          {/* Inner blue rounded square with orange border */}
          <div className="h-5 w-5 rounded bg-sky-900/90 border border-orange-400 flex items-center justify-center">
            <div className="h-2 w-2 rounded bg-cyan-400"></div>
          </div>
        </div>
      );
    }
    
    if (normName.includes('sales ai') || normName.includes('sales')) {
      return (
        <div className="relative h-10 w-10 shrink-0 rounded-[14px] bg-[#225e57] overflow-hidden flex items-center justify-center shadow-sm">
          {/* Orange semi-circle */}
          <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-orange-400 transform -translate-x-1 -translate-y-1"></div>
          {/* Cyan ring */}
          <div className="h-4 w-4 rounded-full border-2 border-cyan-300"></div>
        </div>
      );
    }
    
    // Default fallback
    return (
      <div className="h-10 w-10 shrink-0 rounded-[14px] bg-gradient-to-tr from-orange-400 to-amber-500 overflow-hidden shadow-sm flex items-center justify-center text-white font-black text-sm">
        {name.charAt(0)}
      </div>
    );
  };

  return (
    <div className="relative w-full select-none">
      {status === 'loading' && (
        <div className="rounded-2xl border border-gray-100 bg-white p-3 text-center text-xs text-gray-400 font-bold">
          Loading...
        </div>
      )}
      {status === 'succeeded' && selectedOrg && (
        <>
          {/* Dropdown Trigger Button - Styled exactly like screenshot */}
          <button 
            onClick={toggleDropdown} 
            className="w-full flex items-center justify-between rounded-[18px] bg-[#e1f2f1]/30 border border-[#225e57] px-3.5 py-3 text-left shadow-sm transition hover:bg-[#e1f2f1]/50"
          >
            <div className="flex items-center">
              <div className="mr-3.5 shrink-0">
                {renderOrgIcon(selectedOrg.name)}
              </div>
              <div>
                <p className="text-xs font-black text-gray-900 text-left">{selectedOrg.name}</p>
                <p className="text-[9px] font-bold text-gray-400 text-left uppercase tracking-wider mt-0.5">Owner</p>
              </div>
            </div>
            <FiChevronDown className={`transition-transform text-[#225e57] h-4 w-4 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown List Container - Styled exactly like screenshot */}
          {isOpen && (
            <div className="absolute left-0 z-30 mt-2.5 w-full rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
              <ul className="py-2 flex flex-col bg-white">
                {organizations.data?.map((org) => {
                  const active = selectedOrg?.id === org.id;
                  return (
                    <li
                      key={org.id}
                      onClick={() => handleSelectOrg(org)}
                      className={`flex cursor-pointer items-center gap-3.5 px-4 py-3 transition-colors ${
                        active ? 'bg-[#e1f2f1]/50' : 'hover:bg-gray-50/50'
                      }`}
                    >
                      {renderOrgIcon(org.name)}
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-gray-900 leading-none">{org.name}</span>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Owner</span>
                      </div>
                    </li>
                  );
                })}
                {/* Fixed bottom Add Business trigger button */}
                <li className="mt-1 border-t border-gray-100/80 pt-2 px-1">
                  <button className="flex w-full items-center gap-3.5 px-4 py-2.5 rounded-2xl text-left text-xs font-bold text-gray-400 hover:bg-gray-50/50 transition">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-dashed border-gray-300 bg-white text-gray-400">
                      <FiPlus className="h-5 w-5 text-gray-400" />
                    </div>
                    <span className="text-gray-400 font-bold">Add Business</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrganizationSelector;
