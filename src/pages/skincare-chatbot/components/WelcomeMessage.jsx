import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const WelcomeMessage = ({ onQuickStart }) => {
  const quickStartOptions = [
    {
      title: "Phân tích sản phẩm",
      description: "Tải ảnh sản phẩm để phân tích thành phần",
      icon: "Camera",
      action: () =>
        onQuickStart("Tôi muốn phân tích thành phần của một sản phẩm skincare"),
    },
    {
      title: "Tư vấn quy trình",
      description: "Nhận gợi ý quy trình phù hợp với da",
      icon: "Calendar",
      action: () =>
        onQuickStart("Tôi cần tư vấn quy trình chăm sóc da phù hợp"),
    },
    {
      title: "Giải đáp thắc mắc",
      description: "Hỏi về thành phần và tương thích",
      icon: "HelpCircle",
      action: () => onQuickStart("Tôi có một số câu hỏi về skincare"),
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glass">
          <Icon name="Sparkles" size={32} color="white" />
        </div>

        <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
          Chào mừng đến với AI Skincare Expert
        </h2>

        <p className="text-muted-foreground mb-8 font-caption leading-relaxed">
          Tôi là chuyên gia AI về skincare, sẵn sàng hỗ trợ bạn với mọi thắc mắc
          về chăm sóc da, phân tích thành phần sản phẩm và tư vấn quy trình phù
          hợp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickStartOptions?.map((option, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-200"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={option?.icon} size={20} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {option?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-caption">
                {option?.description}
              </p>
              <Button
                variant="outline"
                onClick={option?.action}
                className="w-full"
              >
                Bắt đầu
              </Button>
            </div>
          ))}
        </div>

        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground font-caption">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Thông tin được cung cấp chỉ mang tính chất tham khảo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
