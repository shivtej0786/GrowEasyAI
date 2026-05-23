const toTimestamp = (seconds, nanoseconds = 0) => ({ _seconds: seconds, _nanoseconds: nanoseconds });

export const mockOrganizationsResponse = {
  data: [
    {
      id: 'ZqxylZwSJdq4u08LwZbV',
      name: 'GrowEasy AI',
      slug: 'groweasy-ai-ZqxylZwSJdq4u08LwZbV',
      owner_uid: 'uybOXAPhh1NFtuUSExurEaZxBh92',
      is_active: true,
      created_at: toTimestamp(1775192080, 291000000),
      updated_at: toTimestamp(1775192080, 291000000),
      role: 'owner',
    },
    {
      id: 'Sb9JUEJHd7ZjmhYLYBrh',
      owner_uid: 'uybOXAPhh1NFtuUSExurEaZxBh92',
      created_at: toTimestamp(1773291944, 967000000),
      updated_at: toTimestamp(1773291944, 967000000),
      slug: 'acme-corp',
      is_active: true,
      name: 'Test Corp',
      role: 'owner',
    },
    {
      id: 'mUvc2OtNbJ9bo1K2hyVu',
      slug: 'designeasy-ai-mUvc2OtNbJ9bo1K2hyVu',
      owner_uid: 'uybOXAPhh1NFtuUSExurEaZxBh92',
      is_active: true,
      created_at: toTimestamp(1773649278, 678000000),
      updated_at: toTimestamp(1773649278, 678000000),
      name: 'VK Test',
      role: 'owner',
    },
    {
      id: 'nkOUqTl7Cwrq7mJnkMSg',
      name: 'Sales AI',
      slug: 'sales-ai-nkOUqTl7Cwrq7mJnkMSg',
      owner_uid: 'uybOXAPhh1NFtuUSExurEaZxBh92',
      is_active: true,
      created_at: toTimestamp(1778567765, 339000000),
      updated_at: toTimestamp(1778567765, 339000000),
      role: 'owner',
    },
  ],
};

const mockLeadList = [
  {
    id: 'lead-1',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'KALAKAR FILMS (SACHIN SINGH)',
    email: 'kalakarfilmss@gmail.com',
    mobile: '+919519758888',
    created_at: 'May 19, 2026, 4:55 AM',
    company: 'Kalakarfilms',
    status: 'Not Dialed',
    quality: '—',
    owner: 'SHIVAM YADAV',
    source: 'Website',
    acquisition_source: 'web',
    call_status_today: 'Done',
  },
  {
    id: 'lead-2',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'Vampire wadhawana',
    email: 'vampirewadhawana@gmail.com',
    mobile: '+918104177777',
    created_at: 'May 19, 2026, 3:53 AM',
    company: "USA PEOPLE'S",
    status: 'Not Dialed',
    quality: '—',
    owner: 'Aiman Shakeel',
    source: 'Website',
    acquisition_source: 'web',
    call_status_today: 'Mark done',
  },
  {
    id: 'lead-3',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'Ayan Shah',
    email: 'ayanshah70710@gmail.com',
    mobile: '+917071007777',
    created_at: 'May 19, 2026, 2:47 AM',
    company: 'Cartoon md',
    status: 'Not Dialed',
    quality: '—',
    owner: 'Mehak Agrawal',
    source: 'Website',
    acquisition_source: 'web',
    call_status_today: 'Mark done',
  },
  {
    id: 'lead-4',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'Dhruvesh Sharma M',
    email: 'papuaashishsaidattafridi@gmail.com',
    mobile: '+917019577777',
    created_at: 'May 19, 2026, 12:47 AM',
    company: 'Dj',
    status: 'Not Dialed',
    quality: '—',
    owner: 'SHIVAM YADAV',
    source: 'Website',
    acquisition_source: 'web',
    call_status_today: 'Mark done',
  },
  {
    id: 'lead-5',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'Mohd Zaid',
    email: 'mohdzaid70118535@gmail.com',
    mobile: '+917011858888',
    created_at: 'May 19, 2026, 12:32 AM',
    company: 'Video',
    status: 'Not Dialed',
    quality: '—',
    owner: 'Aiman Shakeel',
    source: 'Website',
    acquisition_source: 'web',
    call_status_today: 'Mark done',
  },
  {
    id: 'lead-6',
    org_id: 'ZqxylZwSJdq4u08LwZbV',
    name: 'arushi 22013',
    email: 'arushi22013@ncuindia.edu',
    mobile: '+919876543210',
    created_at: 'May 19, 2026, 12:15 AM',
    company: 'Nazztec',
    status: 'Not Dialed',
    quality: '—',
    owner: 'Mehak Agrawal',
    source: 'Webhook',
    acquisition_source: 'web',
    call_status_today: 'Mark done',
  }
];

const leadDetailsById = {
  'lead-1': {
    lead: {
      ...mockLeadList[0],
      crm: {
        status: null,
        last_contacted_at: toTimestamp(1779130935, 197000000),
      }
    },
    activities: []
  }
};

export const mockLeadsResponse = {
  data: mockLeadList,
  last_cursor_id: 'el7KABqhrc5JDVCbfn6y',
};

export const mockLeadDetailsResponse = (id) => {
  if (leadDetailsById[id]) {
    return { data: leadDetailsById[id] };
  }

  const lead = mockLeadList.find((item) => item.id === id) || mockLeadList[0];
  return {
    data: {
      lead: {
        ...lead,
        updated_at: toTimestamp(1779130935, 197000000),
      },
      activities: [],
    },
  };
};
