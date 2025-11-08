import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const SuggestionSidebar = ({ onSuggestionClick, isOpen, onToggle }) => {
  const [activeCategory, setActiveCategory] = useState("routine");

  const suggestionCategories = [
    {
      id: "routine",
      name: "Quy trình chăm sóc",
      icon: "Calendar",
      suggestions: [
        "Tôi nên bắt đầu quy trình skincare như thế nào?",
        "Quy trình chăm sóc da ban đêm gồm những bước nào?",
        "Thứ tự sử dụng serum và moisturizer ra sao?",
        "Tôi có nên dùng toner hàng ngày không?",
        "Bao lâu thì nên thay đổi quy trình skincare?",
      ],
    },
    {
      id: "ingredients",
      name: "Thành phần",
      icon: "Beaker",
      suggestions: [
        "Niacinamide có tác dụng gì với da?",
        "Retinol và retinoid khác nhau như thế nào?",
        "Hyaluronic acid phù hợp với da nào?",
        "Vitamin C có thể dùng chung với BHA không?",
        "Thành phần nào giúp trị mụn hiệu quả?",
      ],
    },
    {
      id: "compatibility",
      name: "Tương thích sản phẩm",
      icon: "CheckCircle",
      suggestions: [
        "Tôi có thể dùng AHA và BHA cùng lúc không?",
        "Sản phẩm nào không nên dùng chung với retinol?",
        "Có nên layering nhiều serum cùng lúc?",
        "Sunscreen có thể dùng với makeup không?",
        "Thành phần nào xung khắc với nhau?",
      ],
    },
    {
      id: "skintype",
      name: "Loại da",
      icon: "User",
      suggestions: [
        "Làm sao để xác định loại da của mình?",
        "Da hỗn hợp nên chăm sóc như thế nào?",
        "Sản phẩm nào phù hợp với da nhạy cảm?",
        "Da dầu mụn cần tránh thành phần gì?",
        "Da khô nên bổ sung độ ẩm ra sao?",
      ],
    },
    {
      id: "troubleshooting",
      name: "Giải quyết vấn đề",
      icon: "AlertCircle",
      suggestions: [
        "Tại sao da tôi bị kích ứng sau khi dùng sản phẩm mới?",
        "Cách xử lý khi da bị breakout?",
        "Làm sao để giảm mụn đầu đen?",
        "Da bị khô và bong tróc phải làm gì?",
        "Cách điều trị vết thâm mụn hiệu quả?",
      ],
    },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/20">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Gợi ý câu hỏi
        </h3>
        <p className="text-sm text-muted-foreground font-caption">
          Chọn chủ đề để xem các câu hỏi phổ biến
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Category Tabs */}
          <div className="grid grid-cols-2 gap-2">
            {suggestionCategories?.map((category) => (
              <Button
                key={category?.id}
                variant={activeCategory === category?.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category?.id)}
                className={`
                  p-3 text-xs font-medium transition-all duration-200
                  ${
                    activeCategory === category?.id
                      ? "bg-gradient-primary text-white shadow-glass"
                      : "text-foreground hover:text-primary hover:bg-white/10"
                  }
                `}
                iconName={category?.icon}
                iconPosition="left"
                iconSize={14}
              >
                {category?.name}
              </Button>
            ))}
          </div>

          {/* Suggestions */}
          <div className="space-y-2">
            {suggestionCategories
              ?.find((cat) => cat?.id === activeCategory)
              ?.suggestions?.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => onSuggestionClick(suggestion)}
                  className="w-full text-left p-3 text-sm text-foreground hover:text-primary hover:bg-white/10 whitespace-normal h-auto leading-relaxed"
                >
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="MessageSquare"
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-primary"
                    />
                    <span>{suggestion}</span>
                  </div>
                </Button>
              ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/20">
        <div className="text-center text-xs text-muted-foreground font-caption">
          <p>💡 Mẹo: Click vào câu hỏi để tự động điền</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 glass-card border-l border-white/20">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onToggle}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-card z-50 lg:hidden transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-foreground">
                Gợi ý câu hỏi
              </h3>
              <Button
                variant="ghost"
                onClick={onToggle}
                className="p-2 text-foreground hover:text-primary"
                iconName="X"
                iconSize={20}
              />
            </div>
            <div className="h-full pb-16">
              <SidebarContent />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SuggestionSidebar;
