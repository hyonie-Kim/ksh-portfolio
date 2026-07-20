import React from 'react';

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  variant?: 'career' | 'learning';
}

export default function TechBadge({ name, icon, variant = 'career' }: TechBadgeProps) {
  const accentClass = variant === 'career' ? 'text-teal-600' : 'text-blue-600';
  const borderClass = variant === 'career' ? 'border-teal-100' : 'border-blue-100';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-lg border ${borderClass} text-xs font-medium text-gray-700`}
    >
      {icon && <span className={accentClass}>{icon}</span>}
      {name}
    </span>
  );
}
