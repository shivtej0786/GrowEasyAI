import React from 'react';
import { FiPhone, FiMessageCircle, FiPlus, FiSparkles, FiClock, FiUser } from 'react-icons/fi';

const iconMap = {
  PHONE_CALL: FiPhone,
  WA_MESSAGE: FiMessageCircle,
  CUSTOM: FiSparkles,
  NEW_LEAD: FiPlus,
};

const ActivityTimeline = ({ activities }) => {
  const list = activities ?? [];

  const getDateLabel = (activity) => {
    if (!activity?.created_at) return '';

    if (typeof activity.created_at === 'string') {
      return activity.created_at;
    }

    const timestamp = typeof activity.created_at === 'object' && typeof activity.created_at._seconds === 'number'
      ? new Date(activity.created_at._seconds * 1000)
      : new Date(activity.created_at);

    if (Number.isNaN(timestamp.getTime())) return '';
    return timestamp.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const getChipsList = (activity) => {
    const chips = [];
    
    // 1. Primary activity label
    if (activity.type === 'PHONE_CALL') {
      chips.push('Phone Call');
    } else if (activity.type === 'WA_MESSAGE') {
      chips.push('Wa Message');
    } else if (activity.type === 'CUSTOM') {
      chips.push('Custom');
    } else if (activity.type === 'NEW_LEAD') {
      chips.push('New Lead');
    } else {
      chips.push(activity.type);
    }

    // 2. Custom identifier / campaign id
    if (activity.metadata?.campaign_id) {
      chips.push(`# ${activity.metadata.campaign_id}`);
    }

    // 3. Direction
    if (activity.direction === 'OUTBOUND') {
      chips.push('Outbound');
    }

    // 4. Created by type
    if (activity.created_by_type) {
      chips.push(activity.created_by_type);
    }

    return chips;
  };

  const renderPillContent = (chip) => {
    if (chip === 'Outbound') {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e1f2f1] px-3.5 py-1.5 text-xs font-bold text-[#225e57]">
          <FiClock className="h-3.5 w-3.5" />
          Outbound
        </span>
      );
    }
    if (chip === 'SYSTEM') {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-bold text-gray-600">
          <FiUser className="h-3.5 w-3.5 text-gray-400" />
          SYSTEM
        </span>
      );
    }
    if (chip.startsWith('#')) {
      return (
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-500">
          <span className="text-gray-400 font-bold mr-1">#</span>
          {chip.replace('#', '').trim()}
        </span>
      );
    }
    if (chip === 'Phone Call') {
      return (
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-800">
          Phone Call
        </span>
      );
    }
    if (chip === 'Wa Message' || chip === 'WhatsApp') {
      return (
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-800">
          Wa Message
        </span>
      );
    }
    if (chip === 'Custom') {
      return (
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-800">
          Custom
        </span>
      );
    }
    if (chip === 'New Lead') {
      return (
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-800">
          New Lead
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-800">
        {chip}
      </span>
    );
  };

  return (
    <div className="pb-2">
      <h3 className="mb-6 text-lg font-bold text-gray-800">Timeline</h3>
      <div className="relative pl-10">
        {/* Left timeline vertical bar */}
        <div className="absolute left-[15px] top-1.5 h-full w-[1.5px] bg-gray-100"></div>
        <ul className="space-y-6">
          {list.map((activity, index) => {
            const Icon = iconMap[activity?.type] || FiPlus;
            const chips = getChipsList(activity);
            const timeLabel = getDateLabel(activity);
            const detailText = activity?.description || activity?.details || '';

            return (
              <li key={activity?.id || index} className="relative">
                {/* Left timeline circle badge */}
                <div className="absolute left-[-2.6rem] top-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm text-[#225e57]">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Content Card */}
                <div className="rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="text-[12px] font-medium text-gray-400">{timeLabel}</div>
                  <p className="mt-1 text-[17px] font-bold leading-6 text-[#225e57]">{activity?.title || activity?.type}</p>
                  {detailText && <p className="mt-1.5 text-[14px] text-gray-500 leading-relaxed font-medium">{detailText}</p>}

                  {/* Nested Text Content Box (if present) */}
                  {activity?.metadata?.content && (
                    <div className="mt-3 rounded-[16px] border border-gray-100 bg-gray-50/50 p-4 text-[14px] leading-relaxed text-gray-600 whitespace-pre-line font-medium">
                      {activity.metadata.content}
                    </div>
                  )}

                  {/* Chips Container Box */}
                  {chips.length > 0 && (
                    <div className="mt-3.5 rounded-[16px] border border-gray-100 bg-gray-50/50 p-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {chips.map((chip, idx) => (
                          <React.Fragment key={idx}>
                            {renderPillContent(chip)}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActivityTimeline;
