'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const SidebarItem = ({ href, icon: Icon, label, isActive: manualIsActive }) => {
  const pathname = usePathname();
  const isActive = manualIsActive !== undefined ? manualIsActive : href ? pathname === href : false;

  const content = (
    <div
      className={`flex items-center gap-3.5 rounded-full px-4 py-2.5 transition-all duration-150 select-none ${
        isActive
          ? 'bg-[#e1f2f1] text-[#225e57] font-bold'
          : 'text-gray-900 hover:bg-gray-50/60 hover:text-gray-950 font-semibold'
      } ${href ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {/* Icon rendered directly on the row, no circular background container */}
      <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-[#225e57]' : 'text-gray-800'}`} />
      <span className="text-[14px] tracking-tight">{label}</span>
    </div>
  );

  return (
    <li className="my-1.5 list-none">
      {href ? <a href={href} className="block">{content}</a> : content}
    </li>
  );
};

export default SidebarItem;
