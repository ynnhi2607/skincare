import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProfileHeader from './components/ProfileHeader';
import StatsOverview from './components/StatsOverview';
import ScanHistoryTab from './components/ScanHistoryTab';
import SavedRoutinesTab from './components/SavedRoutinesTab';
import AccountPreferencesTab from './components/AccountPreferencesTab';

const UserProfileDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('history');
  const [userProfile, setUserProfile] = useState({
    id: 1,
    name: "Nguyễn Thị Minh Anh",
    email: "minhanh@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107343614-1762274140689.png",
    avatarAlt: "Professional headshot of young Vietnamese woman with long black hair wearing white blouse",
    skinType: "combination",
    primaryConcern: ["acne", "oiliness"],
    joinDate: "15/03/2024",
    lastActive: "08/11/2024"
  });

  const [stats, setStats] = useState({
    totalScans: 24,
    savedRoutines: 8,
    aiConsultations: 15,
    activeDays: 45
  });

  const [scanHistory, setScanHistory] = useState([
  {
    id: 1,
    productName: "Kem chống nắng Anessa Perfect UV Sunscreen",
    brandName: "Anessa",
    productImage: "https://images.unsplash.com/photo-1562580836-cdbcc5152819",
    productImageAlt: "White tube of Anessa sunscreen with blue and gold packaging on white background",
    scanDate: "07/11/2024",
    scanTime: "14:30",
    safetyLevel: "safe",
    ingredientCount: 18,
    riskIngredients: 0
  },
  {
    id: 2,
    productName: "Serum Vitamin C The Ordinary",
    brandName: "The Ordinary",
    productImage: "https://images.unsplash.com/photo-1696256016872-1526c9d0e280",
    productImageAlt: "Clear glass dropper bottle of The Ordinary Vitamin C serum with white label",
    scanDate: "05/11/2024",
    scanTime: "09:15",
    safetyLevel: "neutral",
    ingredientCount: 12,
    riskIngredients: 1
  },
  {
    id: 3,
    productName: "Sữa rửa mặt CeraVe Foaming Facial Cleanser",
    brandName: "CeraVe",
    productImage: "https://images.unsplash.com/photo-1735286770188-de4c5131589a",
    productImageAlt: "Blue and white pump bottle of CeraVe foaming facial cleanser",
    scanDate: "03/11/2024",
    scanTime: "20:45",
    safetyLevel: "safe",
    ingredientCount: 15,
    riskIngredients: 0
  },
  {
    id: 4,
    productName: "Kem dưỡng ẩm Neutrogena Hydro Boost",
    brandName: "Neutrogena",
    productImage: "https://images.unsplash.com/photo-1722979350117-d2b6c5e111ee",
    productImageAlt: "Blue jar of Neutrogena Hydro Boost moisturizer with clear gel texture visible",
    scanDate: "01/11/2024",
    scanTime: "16:20",
    safetyLevel: "risky",
    ingredientCount: 22,
    riskIngredients: 3
  },
  {
    id: 5,
    productName: "Toner Paula\'s Choice BHA 2%",
    brandName: "Paula\'s Choice",
    productImage: "https://images.unsplash.com/photo-1620159071448-dc1de8b92703",
    productImageAlt: "Dark blue bottle of Paula\'s Choice BHA liquid exfoliant with pump dispenser",
    scanDate: "30/10/2024",
    scanTime: "11:30",
    safetyLevel: "neutral",
    ingredientCount: 14,
    riskIngredients: 1
  }]
  );

  const [savedRoutines, setSavedRoutines] = useState([
  {
    id: 1,
    name: "Routine chăm sóc da mụn",
    type: "complete",
    createdDate: "25/10/2024",
    lastUsed: "07/11/2024",
    usageCount: 12,
    morningSteps: [
    "Sữa rửa mặt nhẹ nhàng",
    "Toner cân bằng pH",
    "Serum Niacinamide",
    "Kem dưỡng ẩm không dầu",
    "Kem chống nắng SPF 50"],

    eveningSteps: [
    "Tẩy trang dầu",
    "Sữa rửa mặt sạch sâu",
    "Toner BHA 2%",
    "Serum Retinol (3 lần/tuần)",
    "Kem dưỡng ẩm phục hồi",
    "Kem mắt chống lão hóa"]

  },
  {
    id: 2,
    name: "Routine tối giản cho da nhạy cảm",
    type: "minimal",
    createdDate: "20/10/2024",
    lastUsed: "06/11/2024",
    usageCount: 8,
    morningSteps: [
    "Nước tẩy trang micellar",
    "Kem dưỡng ẩm nhẹ",
    "Kem chống nắng khoáng"],

    eveningSteps: [
    "Sữa rửa mặt không xà phòng",
    "Serum Hyaluronic Acid",
    "Kem dưỡng ẩm phục hồi"]

  },
  {
    id: 3,
    name: "Routine chống lão hóa",
    type: "complete",
    createdDate: "15/10/2024",
    lastUsed: "05/11/2024",
    usageCount: 15,
    morningSteps: [
    "Sữa rửa mặt enzyme",
    "Toner vitamin C",
    "Serum Vitamin C 20%",
    "Kem mắt peptide",
    "Kem dưỡng ẩm chống oxy hóa",
    "Kem chống nắng SPF 50+"],

    eveningSteps: [
    "Dầu tẩy trang",
    "Sữa rửa mặt amino acid",
    "Toner chuẩn bị da",
    "Serum Retinol 0.5%",
    "Kem dưỡng ẩm đêm",
    "Dầu dưỡng da mặt"]

  }]
  );

  const [preferences, setPreferences] = useState({
    language: 'vi',
    currency: 'vnd',
    theme: 'light',
    timezone: 'Asia/Ho_Chi_Minh',
    notifications: {
      email: true,
      push: true,
      routineReminders: true,
      productUpdates: false,
      newsletter: true
    },
    privacy: {
      publicProfile: false,
      shareRoutines: true,
      analytics: true,
      personalizedAds: false
    }
  });

  const tabs = [
  {
    id: 'history',
    label: 'Lịch sử quét',
    icon: 'History',
    count: scanHistory?.length
  },
  {
    id: 'routines',
    label: 'Routine đã lưu',
    icon: 'Star',
    count: savedRoutines?.length
  },
  {
    id: 'preferences',
    label: 'Cài đặt',
    icon: 'Settings',
    count: null
  }];


  const handleUpdateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    console.log('Profile updated:', updatedProfile);
  };

  const handleUpdatePreferences = (updatedPreferences) => {
    setPreferences(updatedPreferences);
    console.log('Preferences updated:', updatedPreferences);
  };

  useEffect(() => {
    // Load user data from localStorage or API
    const savedLanguage = localStorage.getItem('glowlens-language') || 'vi';
    if (savedLanguage !== preferences?.language) {
      setPreferences((prev) => ({ ...prev, language: savedLanguage }));
    }
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'history':
        return <ScanHistoryTab scanHistory={scanHistory} />;
      case 'routines':
        return <SavedRoutinesTab savedRoutines={savedRoutines} />;
      case 'preferences':
        return (
          <AccountPreferencesTab
            preferences={preferences}
            onUpdatePreferences={handleUpdatePreferences} />);


      default:
        return <ScanHistoryTab scanHistory={scanHistory} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Hồ sơ cá nhân - GlowLens</title>
        <meta name="description" content="Quản lý hồ sơ cá nhân, lịch sử quét sản phẩm và routine chăm sóc da trên GlowLens" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Profile Header */}
            <ProfileHeader
              userProfile={userProfile}
              onUpdateProfile={handleUpdateProfile} />


            {/* Stats Overview */}
            <StatsOverview stats={stats} />

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Button
                  variant="default"
                  onClick={() => navigate('/product-upload-scanner')}
                  iconName="Scan"
                  iconPosition="left"
                  className="shadow-glow">

                  Quét sản phẩm mới
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/ai-skincare-chatbot')}
                  iconName="MessageCircle"
                  iconPosition="left">

                  Tư vấn AI
                </Button>
              </div>

              <div className="text-sm text-muted-foreground font-caption">
                Hoạt động lần cuối: {userProfile?.lastActive}
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="glass-card mb-6">
              <div className="flex items-center border-b border-white/10">
                {tabs?.map((tab) =>
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-caption font-medium transition-smooth hover:bg-white/5 ${
                  activeTab === tab?.id ?
                  'text-primary border-b-2 border-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground'}`
                  }>

                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.label}</span>
                    {tab?.count !== null &&
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  activeTab === tab?.id ?
                  'bg-primary text-white' : 'bg-muted text-muted-foreground'}`
                  }>
                        {tab?.count}
                      </span>
                  }
                  </button>
                )}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>);

};

export default UserProfileDashboard;