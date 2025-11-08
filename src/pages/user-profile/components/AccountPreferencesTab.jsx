import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const AccountPreferencesTab = ({ preferences, onUpdatePreferences }) => {
  const [localPreferences, setLocalPreferences] = useState(preferences);
  const [hasChanges, setHasChanges] = useState(false);

  const languageOptions = [
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en', label: 'English' }
  ];

  const currencyOptions = [
    { value: 'vnd', label: 'VND (₫)' },
    { value: 'usd', label: 'USD ($)' }
  ];

  const themeOptions = [
    { value: 'light', label: 'Sáng' },
    { value: 'dark', label: 'Tối' },
    { value: 'auto', label: 'Tự động' }
  ];

  const handlePreferenceChange = (key, value) => {
    setLocalPreferences(prev => ({
      ...prev,
      [key]: value
    }));
    setHasChanges(true);
  };

  const handleNotificationChange = (key, checked) => {
    setLocalPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev?.notifications,
        [key]: checked
      }
    }));
    setHasChanges(true);
  };

  const handlePrivacyChange = (key, checked) => {
    setLocalPreferences(prev => ({
      ...prev,
      privacy: {
        ...prev?.privacy,
        [key]: checked
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    onUpdatePreferences(localPreferences);
    setHasChanges(false);
  };

  const handleReset = () => {
    setLocalPreferences(preferences);
    setHasChanges(false);
  };

  const handleExportData = () => {
    console.log('Exporting user data...');
    // Mock export functionality
  };

  const handleDeleteAccount = () => {
    console.log('Delete account requested...');
    // Mock delete account functionality
  };

  return (
    <div className="space-y-6">
      {/* Save Changes Bar */}
      {hasChanges && (
        <div className="glass-card p-4 border-l-4 border-primary">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-primary" />
              <span className="font-caption font-medium text-foreground">
                Bạn có thay đổi chưa được lưu
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleReset}>
                Hủy
              </Button>
              <Button variant="default" size="sm" onClick={handleSave}>
                Lưu thay đổi
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* General Settings */}
      <div className="glass-card p-6">
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Settings" size={20} className="text-primary" />
          Cài đặt chung
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Ngôn ngữ"
            options={languageOptions}
            value={localPreferences?.language}
            onChange={(value) => handlePreferenceChange('language', value)}
          />
          
          <Select
            label="Đơn vị tiền tệ"
            options={currencyOptions}
            value={localPreferences?.currency}
            onChange={(value) => handlePreferenceChange('currency', value)}
          />
          
          <Select
            label="Giao diện"
            options={themeOptions}
            value={localPreferences?.theme}
            onChange={(value) => handlePreferenceChange('theme', value)}
          />
          
          <Input
            label="Múi giờ"
            value={localPreferences?.timezone}
            onChange={(e) => handlePreferenceChange('timezone', e?.target?.value)}
            placeholder="Asia/Ho_Chi_Minh"
          />
        </div>
      </div>
      {/* Notification Settings */}
      <div className="glass-card p-6">
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Bell" size={20} className="text-secondary" />
          Thông báo
        </h3>
        
        <div className="space-y-4">
          <Checkbox
            label="Thông báo email"
            description="Nhận thông báo về routine và phân tích mới"
            checked={localPreferences?.notifications?.email}
            onChange={(e) => handleNotificationChange('email', e?.target?.checked)}
          />
          
          <Checkbox
            label="Thông báo push"
            description="Nhận thông báo trên trình duyệt"
            checked={localPreferences?.notifications?.push}
            onChange={(e) => handleNotificationChange('push', e?.target?.checked)}
          />
          
          <Checkbox
            label="Nhắc nhở routine"
            description="Nhận nhắc nhở thực hiện routine hàng ngày"
            checked={localPreferences?.notifications?.routineReminders}
            onChange={(e) => handleNotificationChange('routineReminders', e?.target?.checked)}
          />
          
          <Checkbox
            label="Cập nhật sản phẩm"
            description="Thông báo khi có sản phẩm mới phù hợp"
            checked={localPreferences?.notifications?.productUpdates}
            onChange={(e) => handleNotificationChange('productUpdates', e?.target?.checked)}
          />
          
          <Checkbox
            label="Newsletter"
            description="Nhận tin tức và mẹo chăm sóc da"
            checked={localPreferences?.notifications?.newsletter}
            onChange={(e) => handleNotificationChange('newsletter', e?.target?.checked)}
          />
        </div>
      </div>
      {/* Privacy Settings */}
      <div className="glass-card p-6">
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Shield" size={20} className="text-success" />
          Quyền riêng tư
        </h3>
        
        <div className="space-y-4">
          <Checkbox
            label="Hồ sơ công khai"
            description="Cho phép người khác xem hồ sơ của bạn"
            checked={localPreferences?.privacy?.publicProfile}
            onChange={(e) => handlePrivacyChange('publicProfile', e?.target?.checked)}
          />
          
          <Checkbox
            label="Chia sẻ routine"
            description="Cho phép chia sẻ routine với cộng đồng"
            checked={localPreferences?.privacy?.shareRoutines}
            onChange={(e) => handlePrivacyChange('shareRoutines', e?.target?.checked)}
          />
          
          <Checkbox
            label="Phân tích sử dụng"
            description="Giúp cải thiện ứng dụng bằng dữ liệu sử dụng"
            checked={localPreferences?.privacy?.analytics}
            onChange={(e) => handlePrivacyChange('analytics', e?.target?.checked)}
          />
          
          <Checkbox
            label="Quảng cáo cá nhân hóa"
            description="Hiển thị quảng cáo phù hợp với sở thích"
            checked={localPreferences?.privacy?.personalizedAds}
            onChange={(e) => handlePrivacyChange('personalizedAds', e?.target?.checked)}
          />
        </div>
      </div>
      {/* Data Management */}
      <div className="glass-card p-6">
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Database" size={20} className="text-warning" />
          Quản lý dữ liệu
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h4 className="font-caption font-medium text-foreground mb-1">
                Xuất dữ liệu
              </h4>
              <p className="text-sm text-muted-foreground">
                Tải xuống tất cả dữ liệu cá nhân của bạn
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleExportData}
              iconName="Download"
              iconPosition="left"
            >
              Xuất dữ liệu
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg border border-destructive/20">
            <div>
              <h4 className="font-caption font-medium text-foreground mb-1">
                Xóa tài khoản
              </h4>
              <p className="text-sm text-muted-foreground">
                Xóa vĩnh viễn tài khoản và tất cả dữ liệu
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              iconName="Trash2"
              iconPosition="left"
            >
              Xóa tài khoản
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPreferencesTab;