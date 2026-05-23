'use client';
import React, { useState } from 'react';

const AddActivityForm = ({ leadId, onAdd }) => {
  const [type, setType] = useState('CUSTOM');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = Date.now();
    const activity = {
      id: `local_${now}`,
      type,
      title: title || (type === 'PHONE_CALL' ? 'Outbound Call Made' : type === 'WA_MESSAGE' ? 'WhatsApp Message Sent' : 'Custom Activity'),
      description: details,
      metadata: {},
      created_by_type: 'USER',
      created_at: { _seconds: Math.floor(now / 1000), _nanoseconds: 0 },
    };

    if (onAdd) onAdd(activity);
    setTitle('');
    setDetails('');
    setType('CUSTOM');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <p className="mb-3 text-base font-bold text-gray-900">Add Activity</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm">
            <option value="CUSTOM">Custom</option>
            <option value="PHONE_CALL">Phone Call</option>
            <option value="WA_MESSAGE">WhatsApp Message</option>
          </select>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title (optional)" className="col-span-1 sm:col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm" />
        </div>
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details" className="mt-3 w-full rounded-md border border-gray-200 p-3 text-sm resize-none" rows={4} />
        <div className="mt-3 flex justify-end">
          <button type="submit" className="inline-flex items-center rounded-xl bg-[#225e57] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1f524b]">Add Activity</button>
        </div>
      </div>
    </form>
  );
};

export default AddActivityForm;
