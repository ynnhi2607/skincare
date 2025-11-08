import React from "react";
import Icon from "../../../components/AppIcon";

const FeatureHighlights = () => {
  const features = [
    {
      id: 1,
      icon: "Camera",
      title: "Nhận Diện Hình Ảnh AI",
      description:
        "Chụp ảnh sản phẩm và nhận phân tích chi tiết về thành phần, lợi ích và độ tương thích với làn da của bạn",
      gradient: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50/50",
    },
    {
      id: 2,
      icon: "Microscope",
      title: "Phân Tích Thành Phần",
      description:
        "Hiểu rõ từng thành phần trong sản phẩm skincare với đánh giá rủi ro và giải thích chi tiết về tác dụng",
      gradient: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50/50",
    },
    {
      id: 3,
      icon: "Target",
      title: "Gợi Ý Cá Nhân Hóa",
      description:
        "Nhận quy trình chăm sóc da được thiết kế riêng cho loại da và nhu cầu cụ thể của bạn",
      gradient: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50/50",
    },
    {
      id: 4,
      icon: "MessageCircle",
      title: "Tư Vấn Chuyên Gia AI",
      description:
        "Trò chuyện với chatbot AI được đào tạo bởi các chuyên gia dermatology để giải đáp mọi thắc mắc về skincare",
      gradient: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50/50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            <span className="gradient-text">Tính Năng Nổi Bật</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-caption">
            Khám phá những công nghệ tiên tiến giúp bạn chăm sóc da một cách
            thông minh và hiệu quả
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              className="group glass-card p-6 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300 animate-glass-float"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Feature Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature?.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={feature?.icon} size={28} color="white" />
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature?.title}
                </h3>
                <p className="text-muted-foreground font-caption leading-relaxed">
                  {feature?.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 ${feature?.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl shadow-glass inline-block">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Zap" size={20} color="var(--color-primary)" />
              <span className="font-caption">
                Được hỗ trợ bởi công nghệ AI tiên tiến
              </span>
              <Icon name="Sparkles" size={20} color="var(--color-secondary)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
