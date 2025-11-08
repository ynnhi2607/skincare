import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProfileHeader = ({ userProfile, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  const skinTypeOptions = [
    { value: 'oily', label: 'Da dầu' },
    { value: 'dry', label: 'Da khô' },
    { value: 'combination', label: 'Da hỗn hợp' },
    { value: 'sensitive', label: 'Da nhạy cảm' },
    { value: 'normal', label: 'Da bình thường' }
  ];

  const skinConcernOptions = [
    { value: 'acne', label: 'Mụn trứng cá' },
    { value: 'aging', label: 'Lão hóa' },
    { value: 'pigmentation', label: 'Tăng sắc tố' },
    { value: 'sensitivity', label: 'Nhạy cảm' },
    { value: 'dryness', label: 'Khô da' },
    { value: 'oiliness', label: 'Tiết dầu' }
  ];

  const handleSave = () => {
    onUpdateProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(userProfile);
    setIsEditing(false);
  };

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* Profile Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-glass">
            <Image
              src={userProfile?.avatar}
              alt={userProfile?.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow transition-smooth hover:scale-110">
            <Icon name="Camera" size={16} color="white" />
          </button>
        </div>

        {/* Profile Information */}
        <div className="flex-1 w-full lg:w-auto">
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Họ và tên"
                  value={editedProfile?.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e?.target?.value })}
                  placeholder="Nhập họ và tên"
                />
                <Input
                  label="Email"
                  type="email"
                  value={editedProfile?.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e?.target?.value })}
                  placeholder="Nhập email"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Loại da"
                  options={skinTypeOptions}
                  value={editedProfile?.skinType}
                  onChange={(value) => setEditedProfile({ ...editedProfile, skinType: value })}
                />
                <Select
                  label="Mối quan tâm chính"
                  options={skinConcernOptions}
                  value={editedProfile?.primaryConcern}
                  onChange={(value) => setEditedProfile({ ...editedProfile, primaryConcern: value })}
                  multiple
                />
              </div>

              <div className="flex items-center gap-3">
                <Button variant="default" onClick={handleSave} iconName="Check" iconPosition="left">
                  Lưu thay đổi
                </Button>
                <Button variant="outline" onClick={handleCancel} iconName="X" iconPosition="left">
                  Hủy
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
                    {userProfile?.name}
                  </h1>
                  <p className="text-muted-foreground font-caption">{userProfile?.email}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  iconName="Edit2"
                  iconPosition="left"
                >
                  Chỉnh sửa
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Droplets" size={18} className="text-primary" />
                    <span className="font-caption font-medium text-foreground">Loại da</span>
                  </div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {skinTypeOptions?.find(opt => opt?.value === userProfile?.skinType)?.label}
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Target" size={18} className="text-secondary" />
                    <span className="font-caption font-medium text-foreground">Mối quan tâm</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {Array.isArray(userProfile?.primaryConcern) 
                      ? userProfile?.primaryConcern?.map(concern => 
                          skinConcernOptions?.find(opt => opt?.value === concern)?.label
                        )?.join(', ')
                      : skinConcernOptions?.find(opt => opt?.value === userProfile?.primaryConcern)?.label
                    }
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={18} className="text-warning" />
                    <span className="font-caption font-medium text-foreground">Tham gia</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{userProfile?.joinDate}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;