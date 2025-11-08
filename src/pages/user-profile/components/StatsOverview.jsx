import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statItems = [
    {
      icon: 'Scan',
      label: 'Sản phẩm đã quét',
      value: stats?.totalScans,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Star',
      label: 'Routine đã lưu',
      value: stats?.savedRoutines,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'MessageCircle',
      label: 'Tư vấn AI',
      value: stats?.aiConsultations,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Calendar',
      label: 'Ngày sử dụng',
      value: stats?.activeDays,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statItems?.map((item, index) => (
        <div key={index} className="glass-card p-4 text-center">
          <div className={`w-12 h-12 ${item?.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
            <Icon name={item?.icon} size={20} className={item?.color} />
          </div>
          <div className="text-2xl font-heading font-bold text-foreground mb-1">
            {item?.value}
          </div>
          <div className="text-sm text-muted-foreground font-caption">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;