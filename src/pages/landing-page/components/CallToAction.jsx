import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate("/product-analysis");
  };

  const handleGetRoutine = () => {
    navigate("/routine-recommendations");
  };

  const handleChatWithAI = () => {
    navigate("/skincare-chatbot");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/30 to-pink-300/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-teal-200/30 to-teal-300/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-yellow-200/20 to-yellow-300/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-glass-lg">
          {/* CTA Header */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glass">
                <Icon name="Rocket" size={32} color="white" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              <span className="gradient-text">Bắt Đầu Hành Trình</span>
              <br />
              <span className="text-foreground">Chăm Sóc Da Thông Minh</span>
            </h2>

            <p className="text-lg text-muted-foreground font-caption max-w-2xl mx-auto">
              Khám phá sức mạnh của AI trong việc phân tích skincare và nhận gợi
              ý cá nhân hóa ngay hôm nay
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Button
              variant="default"
              size="lg"
              onClick={handleStartAnalysis}
              className="bg-gradient-primary hover:opacity-90 text-white p-6 rounded-xl shadow-glass-lg animate-glass-float"
              iconName="Camera"
              iconPosition="left"
              iconSize={20}
            >
              <div className="text-left">
                <div className="font-semibold">Phân Tích Ngay</div>
                <div className="text-sm opacity-90">Chụp ảnh sản phẩm</div>
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleGetRoutine}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white p-6 rounded-xl backdrop-blur-sm"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              <div className="text-left">
                <div className="font-semibold">Gợi Ý Quy Trình</div>
                <div className="text-sm opacity-70">Cá nhân hóa cho bạn</div>
              </div>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={handleChatWithAI}
              className="border-2 border-muted hover:border-primary hover:text-primary p-6 rounded-xl backdrop-blur-sm"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={20}
            >
              <div className="text-left">
                <div className="font-semibold">Tư Vấn AI</div>
                <div className="text-sm opacity-70">Hỏi chuyên gia</div>
              </div>
            </Button>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Shield" size={18} color="var(--color-success)" />
              <span className="text-sm font-caption">100% An Toàn</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Zap" size={18} color="var(--color-warning)" />
              <span className="text-sm font-caption">Kết Quả Tức Thì</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Heart" size={18} color="var(--color-error)" />
              <span className="text-sm font-caption">Miễn Phí Sử Dụng</span>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-caption">
              <Icon name="Award" size={16} color="var(--color-primary)" />
              <span>Được tin tưởng bởi hơn 10,000 người dùng tại Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
