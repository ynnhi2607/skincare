import React from "react";
import Icon from "../../../components/AppIcon";

const RiskAssessmentCard = ({ riskData }) => {
  const getRiskConfig = (level) => {
    switch (level) {
      case "no-risk":
        return {
          color: "text-success",
          bg: "bg-success/10 border-success/20",
          icon: "Shield",
          label: "Không có rủi ro",
          description: "An toàn cho mọi loại da",
        };
      case "low-risk":
        return {
          color: "text-warning",
          bg: "bg-warning/10 border-warning/20",
          icon: "AlertTriangle",
          label: "Rủi ro thấp",
          description: "Cần thử nghiệm trước khi sử dụng",
        };
      case "moderate-risk":
        return {
          color: "text-error",
          bg: "bg-error/10 border-error/20",
          icon: "AlertCircle",
          label: "Rủi ro trung bình",
          description: "Cần tham khảo ý kiến chuyên gia",
        };
      default:
        return {
          color: "text-muted-foreground",
          bg: "bg-muted border-border",
          icon: "HelpCircle",
          label: "Chưa xác định",
          description: "Cần phân tích thêm",
        };
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 animate-glass-float">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glass">
          <Icon name="Shield" size={20} color="white" />
        </div>
        <h3 className="text-xl font-heading font-semibold gradient-text">
          Đánh giá rủi ro
        </h3>
      </div>
      <div className="space-y-6">
        {/* Overall Risk Score */}
        <div className="text-center p-4 glass-card rounded-lg">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Icon
              name={getRiskConfig(riskData?.overallRisk)?.icon}
              size={24}
              className={getRiskConfig(riskData?.overallRisk)?.color}
            />
            <span
              className={`text-lg font-heading font-semibold ${
                getRiskConfig(riskData?.overallRisk)?.color
              }`}
            >
              {getRiskConfig(riskData?.overallRisk)?.label}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-caption">
            {getRiskConfig(riskData?.overallRisk)?.description}
          </p>
        </div>

        {/* Risk Categories */}
        <div className="space-y-4">
          {Object.entries(riskData?.categories)?.map(
            ([category, ingredients]) => {
              const config = getRiskConfig(category);

              return (
                <div
                  key={category}
                  className={`border rounded-lg p-4 ${config?.bg}`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon
                      name={config?.icon}
                      size={18}
                      className={config?.color}
                    />
                    <h4
                      className={`font-heading font-semibold ${config?.color}`}
                    >
                      {config?.label}
                    </h4>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${config?.bg} ${config?.color}`}
                    >
                      {ingredients?.length} thành phần
                    </span>
                  </div>
                  <div className="space-y-2">
                    {ingredients?.map((ingredient, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0 opacity-60"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">
                              {ingredient?.name}
                            </span>
                            {ingredient?.concentration && (
                              <span className="text-xs text-muted-foreground font-data">
                                {ingredient?.concentration}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground font-caption mt-1">
                            {ingredient?.reason}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Risk Summary Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-lg font-heading font-semibold text-success">
              {riskData?.categories?.["no-risk"]?.length || 0}
            </div>
            <div className="text-xs text-muted-foreground font-caption">
              An toàn
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-heading font-semibold text-warning">
              {riskData?.categories?.["low-risk"]?.length || 0}
            </div>
            <div className="text-xs text-muted-foreground font-caption">
              Cẩn thận
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-heading font-semibold text-error">
              {riskData?.categories?.["moderate-risk"]?.length || 0}
            </div>
            <div className="text-xs text-muted-foreground font-caption">
              Rủi ro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentCard;
