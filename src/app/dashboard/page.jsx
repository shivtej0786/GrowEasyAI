'use client';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/ui/Topbar';
import LeadsDashboard from '../../components/leads/LeadsDashboard';

const DashboardPage = () => {
  return (
    <div className="flex bg-gray-50 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <LeadsDashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
