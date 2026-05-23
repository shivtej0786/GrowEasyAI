import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold">No leads found</h3>
      <p className="text-gray-500">There are no leads to display at the moment.</p>
    </div>
  );
};

export default EmptyState;
